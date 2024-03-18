import { describe, it, expect } from "vitest";
import { hammingDistance } from "./hammingDistance.js"; 
        
describe("hammingDistance", function () {
  it("works for input 1", function () {
    expect(hammingDistance("hi", "ho")).toBe(1);
  });
  it("works for input 2", function () {
    expect(hammingDistance("cool", "kewl")).toBe(3);
  })
  it("works in case-insensitive way", function () {
    expect(hammingDistance("yay", "Yay")).toBe(0);
  })
  it("returns NaN if can't calculate because different lengths", function () {
    expect(hammingDistance("ab", "abc")).toEqual(NaN);
  })
});