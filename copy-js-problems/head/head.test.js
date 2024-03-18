import { describe, it, expect } from "vitest";
import { head } from "./head.js"; 
        
describe("head", function () {
  it("works with input 1", function () {
    expect(head([1, 2, 3])).toBe(1);
  });
  it("works with input 2", function () {
    expect(head([{a: 1}, {b: 2}, {c: 3}])).toEqual({a: 1});
  });
  it("works with empty arrays", function () {
    expect(head([])).toBe(undefined);
  });
});