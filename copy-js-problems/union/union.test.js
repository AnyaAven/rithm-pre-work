import { describe, it, expect } from "vitest";
import { union } from "./union.js"; 
        
describe("union", function () {
  function sort(nums) {
    return nums.sort((a, b) => a - b);
  }

  it("works with input 1", function () {
    expect(sort(union([2], [1, 2]))).toEqual([1, 2]);
  });
  it("works with input 2", function () {
    expect(sort(union([2], [1, 2], [3])),).toEqual([1, 2, 3]);
  });
});