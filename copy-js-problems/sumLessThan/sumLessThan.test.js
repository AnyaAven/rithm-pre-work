import { describe, it, expect } from "vitest";
import { sumLessThan } from "./sumLessThan.js"; 
        
describe("sumLessThan", function () {
  it("works", function () {
    expect(sumLessThan([1, 2, 3], 3)).toBe(3);
  });
  it("returns all when all are less", function () {
    expect(sumLessThan([1, 2, 3], 100)).toBe(6);
  });
  it("returns 0 when none are less", function () {
    expect(sumLessThan([2, 2, 2], 1)).toBe(0);
  });
});