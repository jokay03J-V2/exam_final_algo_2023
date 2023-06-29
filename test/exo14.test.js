import { expect, test } from "vitest";
import { exo14 } from "../main";

test("exo14", () => {
  expect(
    exo14([
      [1, 2, 3],
      [5, 6, 7],
      [39, -23, 0],
    ])
  ).toBe(-23);
  expect(
    exo14([
      [-8, 8, 5],
      [-15, 2],
      [10, 13],
    ])
  ).toBe(-15);
});
