import { expect, test } from "vitest";
import { exo8 } from "../main";

test("exo8", () => {
  expect(exo8("hello")).toBe(false);
  expect(exo8("test")).toBe(false);
  expect(exo8("Test")).toBe(true);
  expect(exo8("hopital")).toBe(true);
});
