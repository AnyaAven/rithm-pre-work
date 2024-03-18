import { describe, it, expect } from "vitest";
import { zipObject } from "./zipObject.js"; 
        
describe("zipObject", function () {
  it("works with input 1", function () {
    expect(zipObject(["a", "b"], [1, 2])).toEqual({a: 1, b: 2});
  });
  it("works with input 2", function () {
    expect(zipObject(["a", "b", "c"], [1, 2])).toEqual(
        {a: 1, b: 2, c: undefined});
  });
  it("works with input 3", function () {
    expect(zipObject(["a", "b"], [1, 2, 3])).toEqual({a: 1, b: 2});
  });
});