import { test, expect } from "vitest";
import { exo2 } from "../main";

test("exo2 ", () => {
  expect(exo2("test")).toBe("tset");
  expect(exo2("test2")).toBe("2tset");
});
