import { calculateNrOfCollis } from "calculateNrOfCollis";

test("calculateNrOfCollis", () => {
  expect(() => calculateNrOfCollis([1, 1], [1])).toThrow(
    new Error("must have same number of products"),
  );

  expect(calculateNrOfCollis([1], [1])).toEqual(1);
  expect(calculateNrOfCollis([2], [1])).toEqual(2);
  expect(calculateNrOfCollis([2], [2])).toEqual(1);

  expect(calculateNrOfCollis([3, 2], [1, 1])).toEqual(2);
  expect(calculateNrOfCollis([8, 5, 3], [1, 1, 2])).toEqual(1);

  expect(calculateNrOfCollis([1, 10, 10], [0, 2, 2])).toEqual(5);
  expect(calculateNrOfCollis([0, 10, 10], [0, 2, 2])).toEqual(5);
  expect(calculateNrOfCollis([0, 10, 10], [1, 2, 2])).toEqual(0);
});
