import { describe, it, expect } from "vitest";
import { valTimesIndex } from "./valTimesIndex.js"; 
        
describe("valTimesIndex", function () {
  it("works", function () {
    expect(valTimesIndex([1, 2, 3])).toEqual([0, 2, 6]);
  });
  it("works with empty array", function () {
    expect(valTimesIndex([])).toEqual([]);
  });
});