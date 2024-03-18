import { describe, it, expect } from "vitest";
import { twoArrayDifference } from "./twoArrayDifference.js"; 
        
describe("twoArrayDifference", function () {
  it("works with input 1", function () {
    expect(twoArrayDifference([1, 2, 1], [2])).toEqual([1, 1]);
  });
  it("works with input 2", function () {
    expect(twoArrayDifference([1, 2, 1], [1])).toEqual([2]);
  });
  it("works with input 3", function () {
    expect(twoArrayDifference([2, 3, 4], [6, 7, 8])).toEqual([2, 3, 4]);
  });
  it("works with input 4", function () {
    expect(twoArrayDifference([2, 3, 4], [2, 3, 4, 5])).toEqual([]);
  });
});