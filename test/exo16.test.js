import { expect, test } from "vitest";
import { exo16 } from "../main";

test("exo16", () => {
  expect(exo16(102543)).toBe(6);
  expect(exo16(7896541235)).toBe(10);
});
