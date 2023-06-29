import { expect, test } from "vitest";
import { exo12 } from "../main";

test("exo12", () => {
  expect(exo12([3, 5, 7, 3, 1, 3, 5], 3)).toStrictEqual([5, 7, 1, 5]);
  expect(exo12([6, 78, 9, 6, 8], 6)).toStrictEqual([78, 9, 8]);
});
