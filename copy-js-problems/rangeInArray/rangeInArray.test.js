import { describe, it, expect } from "vitest";
import { rangeInArray } from "./rangeInArray.js"; 
        
describe("rangeInArray", function () {
  it("works with input 1", function () {
    expect(rangeInArray([1, 2, 3, 4], 0, 2)).toBe(6);
  });
  it("works with input 2", function () {
    expect(rangeInArray([1, 2, 3, 4], 0, 3)).toBe(10);
  });
  it("works with missing end", function () {
    expect(rangeInArray([1, 2, 3, 4], 1)).toBe(9);
  });
  it("works with missing start & end", function () {
    expect(rangeInArray([1, 2, 3, 4])).toBe(10);
  });
  it("works with end too large", function () {
    expect(rangeInArray([1, 2, 3, 4], 0, 100)).toBe(10);
  });
  it("works with empty array", function () {
    expect(rangeInArray([], 0, 1)).toBe(0);
  });
});