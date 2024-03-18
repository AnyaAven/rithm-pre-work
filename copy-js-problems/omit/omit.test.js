import { describe, it, expect } from "vitest";
import { omit } from "./omit.js"; 
        
describe("omit", function () {
  it("works with input 1", function () {
    expect(omit({a: 1, b: 2, c: 3}, ["a", "c"])).toEqual({b: 2});
  });
  it("works with input 2", function () {
    expect(omit({a: 1, b: 2, c: 3}, ["b", "c"])).toEqual({a: 1});
  });
  it("works with input 3", function () {
    expect(omit({a: 1, b: 2, c: 3}, ["a", "d"])).toEqual({b: 2, c: 3});
  });
});