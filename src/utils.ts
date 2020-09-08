// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function hasAnyKey(object: Record<string, any>): boolean {
  return Object.keys(object).length > 0;
}
