import { describe, it, expect } from "vitest";
import { greatestCommonDivisor } from "./greatestCommonDivisor.js"; 
        
describe("greatestCommonDivisor", function () {
  it("works with 3,20", function () {
    expect(greatestCommonDivisor(3, 20)).toBe(1);
  });
  it("works with 8,12", function () {
    expect(greatestCommonDivisor(8, 12)).toBe(4);
  });
  it("works with 234,468", function () {
    expect(greatestCommonDivisor(234, 468)).toBe(234);
  });
});