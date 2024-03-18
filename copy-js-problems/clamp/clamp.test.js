import { describe, it, expect } from "vitest";
import { clamp } from "./clamp.js"; 
        
describe("clamp", function () {
  it("works with input 1", function () {
    expect(clamp(-10, -5, 6)).toBe(-5);
  });
  it("works with input 2", function () {
    expect(clamp(10, -2, 5)).toBe(5);
  });
  it("works with input 3", function () {
    expect(clamp(2, -5, 5)).toBe(2);
  });
  it("works with input 4", function () {
    expect(clamp(0, 0, 0)).toBe(0);
  });
});