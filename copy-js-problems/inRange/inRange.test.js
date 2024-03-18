import { describe, it, expect } from "vitest";
import { inRange } from "./inRange.js"; 
        
describe("inRange", function () {
  it("worsk with input 1", function () {
    expect(inRange(3, 2, 4)).toBe(true);
  });
  it("works with input 2", function () {
    expect(inRange(0, -10, 10)).toBe(true);
  });
  it("works with input 3", function () {
    expect(inRange(5, 0, 3)).toBe(false);
  });
  it("works with input 4", function () {
    expect(inRange(4, 8)).toBe(true);
  });
  it("works with input 5", function () {
    expect(inRange(4, 2)).toBe(false);
  });
  it("works with input 6", function () {
    expect(inRange(2, 2)).toBe(false);
  });
  it("works with input 7", function () {
    expect(inRange(1.2, 2)).toBe(true);
  });
  it("works with input 8", function () {
    expect(inRange(5.2, 4)).toBe(false);
  });
  it("works with input 9", function () {
    expect(inRange(5, 6, 4)).toBe(true);
  });
  it("works with input 10", function () {
    expect(inRange(-3, -2, -6)).toBe(true);
  });
  it("works with input 11", function () {
    expect(inRange(10, 100, -5)).toBe(true);
  });
  it("works with input 12", function () {
    expect(inRange(10, 10, -5)).toBe(false);
  });
});