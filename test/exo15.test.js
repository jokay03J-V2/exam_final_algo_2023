import { expect, test } from "vitest";
import { exo15 } from "../main";

test("exo15", () => {
  expect(exo15(3, [3, 5, 3, 6])).toStrictEqual([0, 2]);
  expect(exo15(6, [3, 8, 7, 6, 4, 6])).toStrictEqual([3, 5]);
});
