import { describe, it, expect } from "vitest";
import { mergeSortedArrays } from "./mergeSortedArrays.js"; 
        
describe("mergeSortedArrays", function () {
  it("works for input 1", function () {
    const a = [1, 2];
    const b = [2, 3];
    expect(mergeSortedArrays(a, b)).toEqual([1, 2, 2, 3]);
  });
  it("works for input 2", function () {
    const a = [1, 2, 4];
    const b = [3, 7];
    expect(mergeSortedArrays(a, b)).toEqual([1, 2, 3, 4, 7]);
  });
  it("works for input 3", function () {
    const a = [3, 7];
    const b = [1, 2, 4];
    expect(mergeSortedArrays(a, b)).toEqual([1, 2, 3, 4, 7]);
  });
});