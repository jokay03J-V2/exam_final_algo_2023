import { expect, test } from "vitest";
import { exo4 } from "../main";

test("exo4", () => {
  expect(exo4(4)).toBe(24);
  expect(exo4(5)).toBe(120);
  expect(exo4(6)).toBe(720);
});
