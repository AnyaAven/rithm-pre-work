import { describe, it, expect } from "vitest";
import { createMatrix } from "./createMatrix.js"; 
        
describe("createMatrix", function () {
  it("works with c=0/r=0", function () {
    expect(createMatrix(0, 0)).toEqual([]);
  });
  it("works with c=1/r=2", function () {
    expect(createMatrix(1, 2)).toEqual([[0], [0]]);
  });
  it("works with c=2/r=1", function () {
    expect(createMatrix(2, 1)).toEqual([[0, 0]]);
  });
  it("works with c=2/r=2", function () {
    expect(createMatrix(2, 2)).toEqual([[0, 0], [0, 0]]);
  });
});