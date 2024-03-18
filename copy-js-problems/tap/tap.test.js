import { describe, it, expect } from "vitest";
import { tap } from "./tap.js"; 
        
describe("tap", function () {
  it("works with input 1", function () {
    expect(tap([1, 2, 3], function (array) {
      array.pop();
    }).reverse()).toEqual([2, 1]);
  });

  it("works with input 2", function () {
    expect(tap([1, 2, 3], function (array) {
      array[0] = 10;
      array[1] = -10;
      return "cool";
    })).toEqual([10, -10, 3]);
  });
  it("works with input 3", function () {
    expect(tap(["a", "b", "c"], function (array) {
      return array[0];
    })).toEqual(["a", "b", "c"]);
  });
});