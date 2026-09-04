import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges class names, letting a caller's utility win over a component's default.
 *
 * Without the merge step, `<Button className="px-8">` produces `px-5 px-8` and the
 * winner is whichever Tailwind emitted last — which is a property of the build, not of
 * the code, and changes when an unrelated file adds a class.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
