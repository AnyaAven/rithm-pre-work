import { describe, it, expect } from "vitest";
import { getMonthName } from "./getMonthName.js"; 
        
describe("getMonthName", function () {
  it("works", function () {
    expect(getMonthName(new Date("2/19/2021"))).toEqual("February");
    expect(getMonthName(new Date("12/19/2021"))).toEqual("December");
  });
});