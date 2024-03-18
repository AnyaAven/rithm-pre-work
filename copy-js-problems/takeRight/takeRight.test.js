import { describe, it, expect } from "vitest";
import { takeRight } from "./takeRight.js"; 
        
describe("takeRight", function () {
  it("works with input 1", function () {
    expect(takeRight([1, 2, 3])).toEqual([3]);
  });
  it("works with input 2", function () {
    expect(takeRight([1, 2, 3], 2)).toEqual([2, 3]);
  });
  it("works with input 3", function () {
    expect(takeRight([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });
  it("works with input 4", function () {
    expect(takeRight([1, 2, 3], 0)).toEqual([]);
  });
});