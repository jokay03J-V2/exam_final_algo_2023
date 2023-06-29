import { expect, test } from "vitest";
import { exo6 } from "../main";

test("exo6", () => {
  expect(exo6([1, 2, 3, 6])).toBe(6);
  expect(exo6([1, 8, 162])).toBe(162);
  expect(exo6([-78, -6, -2])).toBe(-2);
});
