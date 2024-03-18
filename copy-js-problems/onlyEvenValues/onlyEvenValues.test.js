import { describe, it, expect } from "vitest";
import { onlyEvenValues } from "./onlyEvenValues.js"; 
        
describe("onlyEvenValues", function () {
  it("works with input 1", function () {
    expect(onlyEvenValues([1, 2, 3])).toEqual([2]);
  });
  it("works with input 2", function () {
    expect(onlyEvenValues([5, 1, 2, 3, 10])).toEqual([2, 10]);
  });
  it("works with input 3", function () {
    expect(onlyEvenValues([1, 3, 5])).toEqual([]);
  });
});