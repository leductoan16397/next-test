export function yearsSince(isoDate: string): number {
  return Math.floor((Date.now() - new Date(isoDate).getTime()) / (365.25 * 864e5));
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function slugify(value: string): string {
  return value.toLowerCase().replace(/\s+/g, '-');
}

export function cx(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
