export function zip<T extends any, S extends any>(a: T[], b: S[]): [T, S][] {
  return a.map((_, i) => [a[i], b[i]]);
}

export function sum(array: number[]) {
  return array.reduce((a, b) => a + b, 0);
}
