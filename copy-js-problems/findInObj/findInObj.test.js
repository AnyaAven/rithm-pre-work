import { describe, it, expect } from "vitest";
import { findInObj } from "./findInObj.js"; 
        
describe("findInObj", function () {
  let people = [
    {name: "Sara", age: 35},
    {name: "Al", age: 21},
    {name: "Lidan", age: 16},
  ];

  it("works for input 1", function () {
    expect(findInObj(people, "name", "Al")).toEqual({name: "Al", age: 21});
  });
  it("works for input 2", function () {
    expect(findInObj(people, "age", 35)).toEqual({name: "Sara", age: 35});
  });
  it("works for input 3", function () {
    expect(findInObj(people, "age", "35")).toEqual(undefined);
  });
  it("works for input 4", function () {
    expect(findInObj(people, "notAKey", "notAValue")).toEqual(undefined);
  });
});