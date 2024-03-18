import { describe, it, expect } from "vitest";
import { linearSearch } from "./linearSearch.js"; 
        
describe("linearSearch", function () {
  it("works with input 1", function () {
    expect(linearSearch([1, 2, 3], 1)).toBe(0);
  });
  it("works with input 2", function () {
    expect(linearSearch([1, 2, 3], 3)).toBe(2);
  });
  it("works with input 3", function () {
    expect(linearSearch([1, 2, 3], 6)).toBe(-1);
  });
});