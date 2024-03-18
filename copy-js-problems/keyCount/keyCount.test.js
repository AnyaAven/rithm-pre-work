import { describe, it, expect } from "vitest";
import { keyCount } from "./keyCount.js"; 
        
describe("keyCount", function () {
  it("works", function () {
    expect(
        keyCount([
          {name: "Elie", catOwner: false},
          {name: "Moxie", isCat: true},
        ]),
    ).toEqual({name: 2, catOwner: 1, isCat: 1});
  });
});