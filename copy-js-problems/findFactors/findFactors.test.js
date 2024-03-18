import { describe, it, expect } from "vitest";
import { findFactors } from "./findFactors.js"; 
        
describe("findFactors", function () {
  it("works with input 1", function () {
    expect(findFactors(10)).toEqual([1, 2, 5, 10]);
  });
  it("works with input 2", function () {
    expect(findFactors(11)).toEqual([1, 11]);
  });
  it("works with input 3", function () {
    expect(findFactors(321421)).toEqual([1, 293, 1097, 321421]);
  });
});