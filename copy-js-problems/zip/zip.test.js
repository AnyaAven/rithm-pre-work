import { describe, it, expect } from "vitest";
import { zip } from "./zip.js"; 
        
describe("zip", function () {
  it("works with input 1", function () {
    expect(zip([1, 2], [3, 4])).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });
  it("works with input 2", function () {
    expect(zip(["w", "x", "y", "z"])).toEqual([["w"], ["x"], ["y"], ["z"]]);
  });
  it("works with input 3", function () {
    expect(zip(["a", "b"], [1, 2], [true, false])).toEqual([
      ["a", 1, true],
      ["b", 2, false],
    ]);
  });
  it("works with input 4", function () {
    expect(zip(["a", "b", "c"], [1, 2], [true, false])).toEqual([
      ["a", 1, true],
      ["b", 2, false],
      ["c", undefined, undefined],
    ]);
  });
});