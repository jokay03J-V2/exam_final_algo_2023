import { expect, test } from "vitest";
import { exo1 } from "../main";

test("exo1 ", () => {
  expect(exo1(4, 2)).toBe(true);
  expect(exo1(4, 7)).toBe(false);
});
