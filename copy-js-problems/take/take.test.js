import { describe, it, expect } from "vitest";
import { take } from "./take.js"; 
        
describe("take", function () {
  it("works with input 1", function () {
    expect(take([1, 2, 3])).toEqual([1]);
  });
  it("works with input 2", function () {
    expect(take([1, 2, 3], 1)).toEqual([1]);
  });
  it("works with input 3", function () {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  });
  it("works with input 4", function () {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });
  it("works with input 5", function () {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });
});