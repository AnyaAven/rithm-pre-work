import { describe, it, expect } from "vitest";
import { pick } from "./pick.js"; 
        
describe("pick", function () {
  it("works with input 1", function () {
    expect(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });
  it("works with input 2", function () {
    expect(pick({ a: 1, b: 2, c: 3 }, ["a", "d"])).toEqual({ a: 1 });
  });
  it("works with input 3", function () {
    expect(pick({ a: 1, b: 2, c: 3 }, ["d", "e", "f"])).toEqual({});
  });
});