import { expect, test } from "vitest";
import { exo10 } from "../main";

test("exo10", () => {
  expect(exo10([3, 2, 6])).toBe(8);
  expect(exo10([12, 4])).toBe(16);
  expect(exo10([3, 9])).toBe(0);
});
