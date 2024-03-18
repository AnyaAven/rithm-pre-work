import { describe, it, expect } from "vitest";
import { aperture } from "./aperture.js"; 
        
describe("aperture", function () {
  it("works with input 1", function () {
    expect(aperture(0, [1, 2, 3, 4])).toEqual([]);
  });
  it("works with input 2", function () {
    expect(aperture(1, [1, 2, 3, 4])).toEqual([[1], [2], [3], [4]]);
  });
  it("works with input 3", function () {
    expect(aperture(2, [1, 2, 3, 4])).toEqual([[1, 2], [2, 3], [3, 4]]);
  });
  it("works with input 4", function () {
    expect(aperture(3, [1, 2, 3, 4])).toEqual([[1, 2, 3], [2, 3, 4],]);
  });
  it("works with input 5", function () {
    expect(aperture(4, [1, 2, 3, 4])).toEqual([[1, 2, 3, 4],]);
  });
  it("return empty array when aperture length is too large", function () {
    expect(aperture(5, [1, 2, 3, 4])).toEqual([]);
  });
});