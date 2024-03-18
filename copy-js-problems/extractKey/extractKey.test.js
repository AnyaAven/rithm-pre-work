import { describe, it, expect } from "vitest";
import { extractKey } from "./extractKey.js"; 
        
describe("extractKey", function () {
  it("works with input 1", function () {
    expect(extractKey(
        [{name: "Al"}, {name: "Jay"}], "name")).toEqual(["Al", "Jay"]);
  });
  it("works with input 2", function () {
    expect(extractKey([
      {eyeColor: "blue", age: 4}, {
        eyeColor: "brown",
        age: 8,
      },
      {eyeColor: "green", age: 1}, {
        eyeColor: "brown",
        age: 6,
      },
    ], "age")).toEqual([4, 8, 1, 6]);
  });
});