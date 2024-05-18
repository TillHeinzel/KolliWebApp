import { findBestCandidates } from "findBestCandidates";
import { generateCandidates } from "generateCandidates";

export function calculateColliDistributions(
  amountsOfProducts: [number, ...number[]],
  colliLower: number,
  colliUpper: number,
  nrOfCandidates: number,
) {
  const range = Array.from(
    { length: colliUpper - colliLower + 1 },
    (_, index) => colliLower + index,
  );

  const candidates = range.flatMap((colli) =>
    generateCandidates(colli, amountsOfProducts),
  );

  return findBestCandidates(nrOfCandidates, amountsOfProducts, candidates);
}
