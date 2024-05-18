import { calculateNrOfCollis } from "calculateNrOfCollis";
import { zip } from "helpers";

export function findBestCandidates(
  nrOfReturns: number,
  amountsOfProducts: [number, ...number[]],
  candidates: [number, ...number[]][],
) {
  const mappedCandidates = candidates.map((candidate) => {
    const nrOfCollis = calculateNrOfCollis(amountsOfProducts, candidate);

    return {
      colliDistribution: candidate,
      nrOfCollis,
      unsoldProducts: calculateNrOfUnsoldProducts(
        amountsOfProducts,
        candidate,
        nrOfCollis,
      ),
    };
  });

  const sortedCandidates = mappedCandidates.toSorted(
    (a, b) => a.unsoldProducts - b.unsoldProducts,
  );

  return sortedCandidates.slice(0, nrOfReturns);
}

function calculateNrOfUnsoldProducts(
  amountsOfProducts: [number, ...number[]],
  candidate: [number, ...number[]],
  nrOfCollis: number,
) {
  return zip(amountsOfProducts, candidate).reduce(
    (acc, [amount, colliAmount]) => {
      return acc + Math.max(0, amount - colliAmount * nrOfCollis);
    },
    0,
  );
}
