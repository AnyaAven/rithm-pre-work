import { describe, it, expect } from "vitest";
import { extractValue } from "./extractValue.js"; 
        
describe("extractValue", function () {
  const people = [
    {name: "Sam"},
    {name: "Kate", dogOwner: true},
    {name: "Yong"},
  ];

  it("works for key everywhere", function () {
    expect(extractValue(people, "name")).toEqual(["Sam", "Kate", "Yong"]);
  });
  it("works for key in certain cases", function () {
    expect(extractValue(people, "dogOwner")).toEqual([true]);
  });
  it("returns empty array for key never present", function () {
    expect(extractValue(people, "penguinOwner")).toEqual([]);
  });
});