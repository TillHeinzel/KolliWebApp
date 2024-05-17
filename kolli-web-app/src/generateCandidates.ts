import { cartesianProduct } from "cartesian-product-multiple-arrays";

export function generateCandidates<T extends [number, ...number[]]>(
  colli: number,
  weights: T,
): T[] {
  if (weights.length === 0) throw new Error("weights must not be empty");
  if (colli === 0) throw new Error("colli must be greater than 0");
  if (!Number.isInteger(colli)) throw new Error("colli must be an integer");
  if (colli < weights.length)
    throw new Error("colli must be larger than the number of products");

  const fractions = weights.map((weight) => weight / sum(weights)) as T;

  const exactWeights = fractions.map((fraction) => colli * fraction) as T;

  const bounds = exactWeights.map((exactWeight) =>
    Number.isInteger(exactWeight)
      ? [exactWeight]
      : [Math.floor(exactWeight), Math.ceil(exactWeight)],
  );

  return cartesianProduct(...bounds).filter(
    (candidate) => sum(candidate) === colli,
  ) as T[];
}

function sum(array: number[]) {
  return array.reduce((a, b) => a + b, 0);
}
