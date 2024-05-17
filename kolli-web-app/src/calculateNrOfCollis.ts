import { zip } from "helpers";

export function calculateNrOfCollis<T extends [number, ...number[]]>(
  amountsOfProducts: T,
  colliDistribution: T,
) {
  if (amountsOfProducts.length !== colliDistribution.length)
    throw new Error("must have same number of products");

  return Math.min(
    ...zip(amountsOfProducts, colliDistribution).map(([amount, perColli]) =>
      Math.floor(amount / perColli),
    ),
  );
}
