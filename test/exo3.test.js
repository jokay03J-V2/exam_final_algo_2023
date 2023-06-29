import { test, expect } from "vitest";
import { exo3 } from "../main";

test("exo3", () => {
  // palindrome
  expect(exo3("kayak")).toBe(true);

  // non palindrome
  expect(exo3("algo")).toBe(false);
});
