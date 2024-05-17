import { findBestCandidates } from "findBestCandidates";

test("findBestCandidates", () => {
  expect(findBestCandidates(1, [1], [[1]])).toEqual([
    {
      colliDistribution: [1],
      nrOfCollis: 1,
      unsoldProducts: 0,
    },
  ]);

  expect(findBestCandidates(1, [2], [[1]])).toEqual([
    {
      colliDistribution: [1],
      nrOfCollis: 2,
      unsoldProducts: 0,
    },
  ]);

  expect(findBestCandidates(1, [2], [[2]])).toEqual([
    {
      colliDistribution: [2],
      nrOfCollis: 1,
      unsoldProducts: 0,
    },
  ]);

  expect(findBestCandidates(1, [5], [[2]])).toEqual([
    {
      colliDistribution: [2],
      nrOfCollis: 2,
      unsoldProducts: 1,
    },
  ]);

  expect(findBestCandidates(1, [5], [[3], [2]])).toEqual([
    {
      colliDistribution: [2],
      nrOfCollis: 2,
      unsoldProducts: 1,
    },
  ]);

  expect(findBestCandidates(1, [10], [[4], [9]])).toEqual([
    {
      colliDistribution: [9],
      nrOfCollis: 1,
      unsoldProducts: 1,
    },
  ]);

  expect(findBestCandidates(2, [10], [[4], [9]])).toEqual([
    {
      colliDistribution: [9],
      nrOfCollis: 1,
      unsoldProducts: 1,
    },
    {
      colliDistribution: [4],
      nrOfCollis: 2,
      unsoldProducts: 2,
    },
  ]);

  expect(findBestCandidates(2, [5], [[2]])).toEqual([
    {
      colliDistribution: [2],
      nrOfCollis: 2,
      unsoldProducts: 1,
    },
  ]);
});
