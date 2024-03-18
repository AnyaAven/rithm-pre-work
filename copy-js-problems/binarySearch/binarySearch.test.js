import { describe, it, expect } from "vitest";
import { binarySearch } from "./binarySearch.js"; 
        
describe("binarySearch", function () {
  it("works with input 1", function () {
    expect(binarySearch([1, 2, 3, 4], 1)).toBe(0);
  });
  it("works with input 2", function () {
    expect(binarySearch([1, 2, 3, 4], 2)).toBe(1);
  });
  it("works with input 3", function () {
    expect(binarySearch([1, 2, 3, 4], 4)).toBe(3);
  });
  it("works with input 4", function () {
    expect(binarySearch([10, 20, 30, 40], 15)).toBe(-1);
  });
  it("works with input 5", function () {
    expect(binarySearch([2, 4, 6, 8, 10, 12], 6)).toBe(2);
  });
});