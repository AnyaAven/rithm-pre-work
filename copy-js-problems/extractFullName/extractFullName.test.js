import { describe, it, expect } from "vitest";
import { extractFullName } from "./extractFullName.js"; 
        
describe("extractFullName", function () {
  it("works", function () {
    expect(
        extractFullName([
          {first: "Amalie", middle: "Emmy", last: "Noether"},
          {first: "Mary", middle: "Lucy", last: "Cartwright"},
        ]),
    ).toEqual(["Amalie Noether", "Mary Cartwright"]);
  });
});