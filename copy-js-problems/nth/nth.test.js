import { describe, it, expect } from "vitest";
import { nth } from "./nth.js"; 
        
describe("nth", function () {
  it("works with input 1", function () {
    expect(nth(["a", "b", "c", "d"], 1)).toBe("b");
  });
  it("works with input 2", function () {
    expect(nth(["a", "b", "c", "d"], -2)).toBe("c");
  });
  it("works with input 3", function () {
    expect(nth(["a", "b", "c", "d"], 0)).toBe("a");
  });
  it("works with input 4", function () {
    expect(nth(["a", "b", "c", "d"], -4)).toBe("a");
  });
});