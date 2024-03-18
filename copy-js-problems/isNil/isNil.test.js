import { describe, it, expect } from "vitest";
import { isNil } from "./isNil.js"; 
        
describe("isNil", function () {
  it("works with input 1", function () {
    expect(isNil(null)).toBe(true);
  });
  it("works with input 2", function () {
    expect(isNil(NaN)).toBe(false);
  });
  it("works with input 3", function () {
    expect(isNil([])).toBe(false);
  });
  it("works with input 4", function () {
    expect(isNil(false)).toBe(false);
  });
  it("works with input 5", function () {
    expect(isNil(undefined)).toBe(true);
  });
  it("works with input 6", function () {
    expect(isNil()).toBe(true);
  });
});