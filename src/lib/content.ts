/**
 * The site's copy, in one file.
 *
 * Marketing text drifts from the product the moment the two live apart. Keeping every
 * claim here means one person can check the whole site against reality by reading one
 * file — and it means a legal or brand review is a single pull request rather than a
 * hunt through thirty components.
 *
 * A rule this file follows: nothing here is a claim about traction. The numbers are
 * capability — what the platform is engineered to carry — and they are worded that way
 * on purpose. Usage figures belong here only once they are measured and can be defended.
 */

export const company = {
  name: 'Crokta Engineering Limited',
  short: 'Crokta',
  product: 'Orbit',
  tagline: 'Get there. Earn there. Move your whole team there.',

  // One inbox and one line, used everywhere. Publishing addresses that do not exist yet
  // — sales@, drivers@, support@ — costs more in unanswered mail than it gains in
  // looking large, and the first enquiry that bounces is the one that mattered.
  email: 'orbit@crokta.com',
  phone: '+234 706 202 3557',
  phoneHref: '+2347062023557',
} as const

/**
 * The three audiences. Order matters: riders first because they are the largest group,
 * enterprise last because that page ends in a sales conversation.
 */
export const offerings = [
  {
    slug: '/riders/',
    audience: 'For riders',
    title: 'A ride that behaves the way you expect',
    body: 'The price you were shown is the price you pay. The driver you were sent is the driver who arrives. Someone answers when something goes wrong.',
    points: ['Upfront fares, no surprise adjustments', 'Verified, background-checked drivers', 'Share your trip with someone who cares'],
    cta: 'How riding works',
  },
  {
    slug: '/drivers/',
    audience: 'For drivers',
    title: 'Earnings you can actually predict',
    body: 'Clear rates before you accept, daily payouts you do not have to chase, and a support line staffed by people who can actually fix things.',
    points: ['See the fare before you accept', 'Daily payouts, transparent deductions', 'Onboarding in under a week'],
    cta: 'Start driving',
  },
  {
    slug: '/business/',
    audience: 'For business',
    title: 'Ground travel your finance team stops chasing',
    body: 'Policy, budgets and cost centres enforced at booking. One consolidated invoice at month end instead of a folder of reimbursement claims.',
    points: ['Policy enforced before the trip, not after', 'One invoice, coded to cost centres', 'Live visibility of every booking'],
    cta: 'See business travel',
  },
] as const

/**
 * Why a stranger should trust us. Each of these is a property of how the platform is
 * built rather than a promise, which is the difference between a reason and a slogan.
 */
export const trustPillars = [
  {
    title: 'The price you see is the price you pay',
    body: 'Your fare is quoted before you book and signed by our pricing service. It cannot be adjusted after the fact by a driver, an agent, or us. If a trip changes, you see the new price before it applies.',
  },
  {
    title: 'Every driver is verified before their first trip',
    body: 'Identity, licence, vehicle papers and a background check — all confirmed before an account can take a single ride, and re-checked on a schedule rather than once at sign-up.',
  },
  {
    title: 'Money is handled like money',
    body: 'Fares, refunds and driver earnings run through a double-entry ledger. Every naira is accounted for on both sides, refunds are recorded rather than erased, and no request can charge you twice.',
  },
  {
    title: 'Support that can actually do something',
    body: 'Our support team can look up your trip, see what happened, and act on it — cancel, refund, escalate — with every action recorded. You are not talking to someone reading a script with no buttons.',
  },
  {
    title: 'Your data stays yours',
    body: 'We collect what a ride needs and no more. Location history is retained for a defined period for safety and disputes, then expires. We do not sell it, and we do not build advertising profiles from it.',
  },
  {
    title: 'Built to keep working',
    body: 'The platform is designed so that a problem in one part does not take down your ride. When something does break, we know within seconds and we publish what happened afterwards.',
  },
] as const

/** Capability figures — what the platform is engineered to carry. Not traction claims. */
export const capacity = [
  { value: '864,000', label: 'rides a day', note: 'the daily volume the platform is engineered to carry' },
  { value: '50,000', label: 'concurrent drivers', note: 'online and dispatchable at once' },
  { value: '< 20s', label: 'to find your driver', note: 'typical time from request to assignment' },
  { value: '24/7', label: 'support and monitoring', note: 'people and alerting, not just a help page' },
] as const

export const safety = [
  { title: 'Verified drivers', body: 'Identity, licence, vehicle documents and background checks, confirmed before the first trip and re-checked on a schedule.' },
  { title: 'Share your trip', body: 'Send a live link to someone you trust. They see your route and your arrival without needing the app.' },
  { title: 'In-app emergency help', body: 'One tap connects you to our safety team with your exact location and trip details already attached.' },
  { title: 'Every trip recorded', body: 'Route, timing and fare are stored against the trip, so a dispute is settled with facts rather than recollection.' },
  { title: 'Two-way ratings', body: 'Riders and drivers rate each other. Consistently poor conduct on either side ends access to the platform.' },
  { title: 'Reviewable decisions', body: 'If an automated system restricts an account, a person reviews it. Nothing that affects a livelihood is final without human sign-off.' },
] as const

/** Rider journey, three steps. */
export const riderSteps = [
  { step: 'Set your pickup and destination', body: 'You get an upfront fare and an estimated arrival time before you commit to anything.' },
  { step: 'We find the closest good driver', body: 'Dispatch weighs distance, arrival time and reliability, and comes back in seconds — not a queue of drivers declining in turn.' },
  { step: 'Ride, pay, done', body: 'Pay by card or cash. Your receipt arrives immediately and the trip is stored in your history.' },
] as const

/** Driver onboarding. This is the substance of the drivers page. */
export const driverSteps = [
  {
    title: 'Apply online',
    duration: '10 minutes',
    body: 'Tell us your city, your vehicle and how to reach you. No office visit and no appointment to secure a form.',
  },
  {
    title: 'Upload your documents',
    duration: 'Same day',
    body: 'Driver’s licence, vehicle registration, insurance, roadworthiness certificate and a clear photo of yourself. Straight from your phone.',
  },
  {
    title: 'Verification and background check',
    duration: '2–4 days',
    body: 'We confirm your identity and documents and run your background check. You can see exactly which step you are on the whole time.',
  },
  {
    title: 'Vehicle inspection',
    duration: '1 visit',
    body: 'A short safety inspection at a partner centre near you. If something needs fixing, we tell you precisely what.',
  },
  {
    title: 'Go online and earn',
    duration: 'Immediately',
    body: 'Your account activates, the driver app unlocks, and your first payout runs the day after your first trip.',
  },
] as const

export const driverRequirements = [
  'A valid driver’s licence held for at least one year',
  'Vehicle registration and a current insurance certificate',
  'A valid roadworthiness certificate',
  'A smartphone running Android 9 or iOS 15, or newer',
  'A bank account in your own name for payouts',
  'A clean background check',
] as const

export const driverBenefits = [
  {
    title: 'You see the fare before you accept',
    body: 'Pickup distance, destination and what you will earn, all on the offer screen. No accepting blind and finding out afterwards that it was not worth the fuel.',
  },
  {
    title: 'Daily payouts',
    body: 'Your earnings land in your account every day, with every deduction itemised. No weekly wait, no chasing anyone, no unexplained gaps.',
  },
  {
    title: 'Keep more when it is busy',
    body: 'When demand spikes, the increase goes to the driver who took the trip in those conditions. You see the multiplier on the offer before you accept it.',
  },
  {
    title: 'Support staffed by people',
    body: 'A rider dispute, a payment that looks wrong, an account problem — you reach someone who can look at your trip and fix it, not a chatbot loop.',
  },
  {
    title: 'You choose your hours',
    body: 'No shifts, no minimum online time, no penalty for going offline. Drive around a job, a class or a family, and stop when you want to.',
  },
  {
    title: 'Decisions you can appeal',
    body: 'If your account is restricted you are told why, and a person reviews it. Automated systems flag; they do not have the last word.',
  },
] as const

export const driverFaqs = [
  {
    q: 'What does it cost to start?',
    a: 'Nothing. There is no application fee, no onboarding charge and no charge for the driver app. We take a service fee from each completed trip, and it is shown on every payout statement.',
  },
  {
    q: 'How much can I earn?',
    a: 'It depends on your city, your hours and how busy it is. We will not print a number here that we cannot stand behind for you specifically — but you see the fare on every offer before you accept, so you always know what a trip is worth before you drive it.',
  },
  {
    q: 'Do I need my own car?',
    a: 'You can drive your own vehicle if it meets our requirements, or join through one of our fleet partners if you do not own one. Tell us which on the application and we will point you to the right route.',
  },
  {
    q: 'When do I get paid?',
    a: 'Daily. Earnings from completed trips are paid into your bank account the next day, with a statement showing every fare, bonus and deduction.',
  },
  {
    q: 'What if a rider disputes a fare?',
    a: 'We look at the recorded route, timing and the quoted fare. Because the fare was signed before the trip started, most disputes resolve in minutes and you are not left out of pocket while it is checked.',
  },
  {
    q: 'Can I drive part-time?',
    a: 'Yes. There are no shifts and no minimum hours. Go online when it suits you and offline when it does not.',
  },
] as const

/** Enterprise capabilities. */
export const businessFeatures = [
  {
    title: 'Policy enforced at booking',
    body: 'Set who can travel, when, between where, and up to what cost. The rules apply as the trip is booked — so there is nothing to claw back afterwards and no awkward conversation at expense time.',
  },
  {
    title: 'One invoice, properly coded',
    body: 'Every trip carries its cost centre, project code and approver. Month end is a single reconciled invoice instead of a folder of receipts and a spreadsheet.',
  },
  {
    title: 'Approvals that travel with the trip',
    body: 'Trips outside policy route to the right approver automatically and are visible to both sides. No trip is quietly taken and argued about later.',
  },
  {
    title: 'Live visibility',
    body: 'Your travel manager sees what is booked, what is under way and what it is costing, in real time — not in a report that arrives three weeks after the money is spent.',
  },
  {
    title: 'Duty of care',
    body: 'Know where your people are when they are travelling on your account, and reach them quickly if something happens. Verified drivers and recorded routes on every trip.',
  },
  {
    title: 'Onboarded in days',
    body: 'Bring your employee list, your cost centres and your policy. We configure it with you and run a pilot department before you commit the whole organisation.',
  },
] as const

/** The lead magnet offered on the business page. */
export const leadMagnet = {
  title: 'The Ground Transport Cost Audit',
  subtitle: 'A 17-page working guide for finance and travel managers',
  blurb:
    'Most organisations know what they spend on ground travel and almost none know what it is costing them. This guide walks through the seven places that money leaks, with the questions to ask and a worksheet to run the numbers for your own organisation.',
  contents: [
    'The seven places ground travel budgets leak, with typical size of each',
    'Reimbursement versus direct billing: the real administrative cost per trip',
    'How to write a travel policy people actually follow',
    'A one-page worksheet to calculate your current cost per trip',
    'The questions to ask any mobility provider before signing',
    'A 30/60/90 day plan for moving a department across',
  ],
  formNote:
    'We will email you the guide and nothing else unless you ask. No newsletter, no drip sequence, no sharing your details with anyone.',
} as const
