import { describe, it, expect } from "vitest";
import { unzip } from "./unzip.js"; 
        
describe("unzip", function () {
  it("works with input 1", function () {
    expect(unzip([[1, 2], [3, 4]])).toEqual([[1, 3], [2, 4]]);
  });
  it("works with input 2", function () {
    expect(unzip([[1, 2, 3], [4, 5, 6]])).toEqual([[1, 4], [2, 5], [3, 6]]);
  });
  it("unzip_input_3", function () {
    expect(unzip([["a"], ["b"], ["c"]])).toEqual([["a", "b", "c"]]);
  });
});