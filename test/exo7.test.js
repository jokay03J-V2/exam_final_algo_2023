import { expect, test } from "vitest";
import { exo7 } from "../main";

test("exo7", () => {
  expect(exo7("La crise économique", "Le scénario comique")).toBe(true);
  expect(exo7("manoir", "romain")).toBe(true);
  expect(exo7("test", "pas anagramme")).toBe(false);
  expect(exo7("manoir", "argent")).toBe(false);
});
