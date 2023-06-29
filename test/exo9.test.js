import { expect, test } from "vitest";
import { exo9 } from "../main";

test("exo9", () => {
  expect(exo9([1, 9, 3, 4])).toBe(4);
  expect(exo9([1, 9, 3])).toBe(3);
});
