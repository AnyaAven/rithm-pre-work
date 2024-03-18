import { describe, it, expect } from "vitest";
import { filterByKey } from "./filterByKey.js"; 
        
describe("filterByKey", function () {
  it("works", function () {
    expect(
        filterByKey(
            [
              {first: "Elie"},
              {first: "Joel", isCatOwner: true},
              {first: "Zach"},
              {first: "Sarah", isCatOwner: false},
            ],
            "isCatOwner",
        ),
    ).toEqual([
      {first: "Joel", isCatOwner: true},
      {first: "Sarah", isCatOwner: false},
    ]);
  });
});