import { calculateColliDistributions } from "calculateColliDistributions";

test("calculateColliDistributions", () => {
  expect(calculateColliDistributions([1], 1, 1, 4)).toEqual([
    { colliDistribution: [1], nrOfCollis: 1, unsoldProducts: 0 },
  ]);

  expect(calculateColliDistributions([400, 600], 10, 10, 4)).toEqual([
    { colliDistribution: [4, 6], nrOfCollis: 100, unsoldProducts: 0 },
  ]);
});
