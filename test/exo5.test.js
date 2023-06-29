import { test, expect } from "vitest";
import { exo5 } from "../main";

test("exo5", () => {
  // non nombre premier
  expect(exo5(4)).toBe(false);
  expect(exo5(8)).toBe(false);
  expect(exo5(22)).toBe(false);

  // nombre premier
  expect(exo5(2)).toBe(true);
  expect(exo5(5)).toBe(true);
  expect(exo5(173)).toBe(true);
});
