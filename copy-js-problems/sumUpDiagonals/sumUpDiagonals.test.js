import { describe, it, expect } from "vitest";
import { sumUpDiagonals } from "./sumUpDiagonals.js"; 
        
describe("sumUpDiagonals", function () {
  it("works for input 1", function () {
    const matrix1 = [
      [1, 2],
      [3, 4],
    ];
    expect(sumUpDiagonals(matrix1)).toBe(10);
  });
  it("works for input 2", function () {
    const matrix2 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(sumUpDiagonals(matrix2)).toBe(30);
  });
  it("works for input 3", function () {
    const matrix3 = [
      [1, 3, 2],
      [7, 8, 9],
      [6, 5, 4],
    ];
    expect(sumUpDiagonals(matrix3)).toBe(29);
  });
});