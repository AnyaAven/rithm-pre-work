import { describe, it, expect } from "vitest";
import { vowelCount } from "./vowelCount.js"; 
        
describe("vowelCount", function () {
  it("works with input 1", function () {
    expect(vowelCount("noon")).toEqual({o: 2});
  });
  it("works with input 2", function () {
    expect(vowelCount("hmm")).toEqual({});
  });
  it("works with input 3", function () {
    expect(vowelCount("I am silly")).toEqual({i: 2, a: 1});
  });
});