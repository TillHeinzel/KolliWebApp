import { generateCandidates } from "colliDistribution";

test("generateCandidates", () => {
  // @ts-ignore
  expect(() => generateCandidates(1, [])).toThrow(
    new Error("weights must not be empty"),
  );
  expect(() => generateCandidates(0, [1])).toThrow(
    new Error("colli must be greater than 0"),
  );
  expect(() => generateCandidates(0.5, [1])).toThrow(
    new Error("colli must be an integer"),
  );
  expect(() => generateCandidates(1, [1, 1])).toThrow(
    new Error("colli must be larger than the number of products"),
  );

  expect(generateCandidates(1, [1])).toIncludeSameMembers([[1]]);
  expect(generateCandidates(2, [1])).toIncludeSameMembers([[2]]);
  expect(generateCandidates(30, [1])).toIncludeSameMembers([[30]]);

  expect(generateCandidates(2, [1, 1])).toIncludeSameMembers([[1, 1]]);
  expect(generateCandidates(3, [1, 1, 1])).toIncludeSameMembers([[1, 1, 1]]);
  expect(generateCandidates(6, [1, 1, 1])).toIncludeSameMembers([[2, 2, 2]]);

  expect(generateCandidates(3, [1, 2])).toIncludeSameMembers([[1, 2]]);

  expect(generateCandidates(3, [1, 1])).toIncludeSameMembers([
    [1, 2],
    [2, 1],
  ]);

  expect(generateCandidates(4, [1, 2])).toIncludeSameMembers([
    [1, 3],
    [2, 2],
  ]);
});
