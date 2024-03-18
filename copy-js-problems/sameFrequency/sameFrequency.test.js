import { describe, it, expect } from "vitest";
import { sameFrequency } from "./sameFrequency.js"; 
        
describe("sameFrequency", function () {
  it("works with input 1", function () {
    expect(sameFrequency(1122, 1212)).toBe(true);
  });
  it("works with input 2", function () {
    expect(sameFrequency(1122, 121)).toBe(false);
  });
  it("works with input 3", function () {
    expect(sameFrequency(1122, 12121)).toBe(false);
  });
});