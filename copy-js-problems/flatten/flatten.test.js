import { describe, it, expect } from "vitest";
import { flatten } from "./flatten.js"; 
        
describe("flatten", function () {
  it("works with input 1", function () {
    expect(flatten([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
  });
  it("works with input 2", function () {
    expect(flatten([[1], [2]])).toEqual([1, 2]);
  });
  it("works with input 3", function () {
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
  });
});