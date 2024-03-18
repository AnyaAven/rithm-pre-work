import { describe, it, expect } from "vitest";
import { fill } from "./fill.js"; 
        
describe("fill", function () {
  it("works with input 1", function () {
    const arr = [1, 2, 3];
    fill(arr, "y");
    expect(arr).toEqual(["y", "y", "y"]);
  });
  it("works with input 2", function () {
    expect(fill([undefined, null, false], "1")).toEqual(["1", "1", "1"]);
  });
});