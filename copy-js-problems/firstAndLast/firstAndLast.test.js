import { describe, it, expect } from "vitest";
import { firstAndLast } from "./firstAndLast.js"; 
        
describe("firstAndLast", function () {
  it("works for input 2", function () {
    expect(
        firstAndLast(["hi", "goodbye", "x"]),
    ).toEqual(["hi", "ge", "xx"]);
  });
});