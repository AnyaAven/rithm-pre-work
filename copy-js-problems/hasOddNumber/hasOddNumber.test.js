import { describe, it, expect } from "vitest";
import { hasOddNumber } from "./hasOddNumber.js"; 
        
describe("hasOddNumber", function () {
  it("works for input 1", function () {
    expect(hasOddNumber([2, 1, 4])).toBe(true);
  });
  it("works for input 2", function () {
    expect(hasOddNumber([2, 4, 6])).toBe(false);
  });
});