import { expect, test } from "vitest";
import { exo13 } from "../main";

test("exo13", () => {
  expect(exo13("voyage")).toBe(4);
  expect(exo13("bonjour")).toBe(3);
});
