import { describe, it, expect } from "vitest";
import { isWeekend } from "./isWeekend.js"; 
        
describe("isWeekend", function () {
  it("works", function () {
    expect(isWeekend(new Date("8/19/2021"))).toEqual(false);
    expect(isWeekend(new Date("8/21/2021"))).toEqual(true);
  });
});