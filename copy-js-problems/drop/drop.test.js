import { describe, it, expect } from "vitest";
import { drop } from "./drop.js"; 
        
describe("drop", function () {
  it("works with input 1", function () {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });
  it("works with input 2", function () {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });
  it("works with input 3", function () {
    expect(drop([1, 2, 3], 10)).toEqual([]);
  });
  it("works with input 4", function () {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
  it("doesn't mutate input array", function () {
    const arr = [1, 2, 3];
    drop(arr, 2);
    expect(arr).toEqual([1, 2, 3]);
  });
});