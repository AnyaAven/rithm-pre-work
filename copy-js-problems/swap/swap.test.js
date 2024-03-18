import { describe, it, expect } from "vitest";
import { swap } from "./swap.js"; 
        
describe("swap", function () {
  it("works with numbers and mutates the array", function () {
    const arr = [1, 2, 3, 4];
    expect(swap(arr, 0, 2)).toEqual([3, 2, 1, 4]);
    expect(arr).toEqual([3, 2, 1, 4]);
  });

  it("works with strings and mutates the array", function () {
    const arr = ["a", "b", "c", "d"];
    expect(swap(arr, 0, 2)).toEqual(["c", "b", "a", "d"]);
    expect(arr).toEqual(["c", "b", "a", "d"]);
  });

  it("works with mixed types and mutates the array", function () {
    const arr = ["a", 2, 3, "d"];
    expect(swap(arr, 0, 2)).toEqual([3, 2, "a", "d"]);
    expect(arr).toEqual([3, 2, "a", "d"]);
  });
});