import { describe, it, expect } from "vitest";
import { twoArrayObject } from "./twoArrayObject.js"; 
        
describe("twoArrayObject", function () {
  it("works for matching sizes", function () {
    expect(twoArrayObject(["a", "b"], [1, 2])).toEqual({a: 1, b: 2});
  });
  it("works when more keys", function () {
    expect(twoArrayObject(["a", "b"], [1])).toEqual({a: 1, b: null});
  });
  it("works for more values", function () {
    expect(twoArrayObject(["a", "b"], [1, 2, 3])).toEqual({a: 1, b: 2});
  });
});