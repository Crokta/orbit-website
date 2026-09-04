# ---------------------------------------------------------------------------
# Multistage. The build toolchain — Node, pnpm, TypeScript, ~400 MB of
# node_modules — exists only in the first stage. What ships is static files and
# a web server, because a production image containing a compiler is a production
# image containing an attacker's toolchain.
#
# The site is a Next.js static export, so there is no Node process in the
# runtime image at all: no server to patch, no memory to leak, and the whole
# thing can be put behind a CDN or dropped in a bucket instead if that suits.
# ---------------------------------------------------------------------------

FROM node:22-alpine AS build

# corepack pins the package manager to the version in package.json, so the build
# does not silently change behaviour when a newer pnpm is released.
RUN corepack enable

WORKDIR /src

# Manifests first. Docker caches this layer, so editing a component does not
# reinstall every dependency.
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

COPY . .

# NEXT_PUBLIC_* values are read at build time and inlined into the bundle, so this
# has to be present here rather than in the runtime image. It is public by
# definition — never put a secret behind a NEXT_PUBLIC_ name.
ARG NEXT_PUBLIC_LEAD_ENDPOINT=""
ENV NEXT_PUBLIC_LEAD_ENDPOINT=$NEXT_PUBLIC_LEAD_ENDPOINT

# Type and lint errors fail the build. A site that compiles but does not
# typecheck is one where the types have quietly stopped meaning anything.
RUN pnpm build


FROM nginx:1.27-alpine AS runtime

# Runs as an existing unprivileged user. nginx's own directories have to be
# writable by it, and the stock image assumes root for those.
RUN adduser -u 64199 -D -H orbit \
 && mkdir -p /var/cache/nginx /var/run \
 && chown -R 64199:64199 /var/cache/nginx /var/run /etc/nginx/conf.d /usr/share/nginx/html

# A template, not a finished config — see the CSP note inside it. The stock nginx image
# runs envsubst over /etc/nginx/templates at startup, which is how the API origin gets in.
COPY --chown=64199:64199 nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build --chown=64199:64199 /src/out /usr/share/nginx/html

USER 64199

# Only ORBIT_API_ORIGIN is substituted. Without this filter envsubst would also replace
# $host, $scheme and $uri — nginx's own runtime variables — and every try_files rule would
# resolve to an empty string.
ENV NGINX_ENVSUBST_FILTER=ORBIT_API_ORIGIN
ENV NGINX_ENVSUBST_OUTPUT_DIR=/etc/nginx/conf.d
ENV ORBIT_API_ORIGIN=""

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
