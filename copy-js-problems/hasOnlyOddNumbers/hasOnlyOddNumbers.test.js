import { describe, it, expect } from "vitest";
import { hasOnlyOddNumbers } from "./hasOnlyOddNumbers.js"; 
        
describe("hasOnlyOddNumbers", function () {
  it("works for all odds", function () {
    expect(hasOnlyOddNumbers([1, 3, 5])).toBe(true);
  });
  it("works for mixed even/odd", function () {
    expect(hasOnlyOddNumbers([1, 2, 3])).toBe(false);
  });
});