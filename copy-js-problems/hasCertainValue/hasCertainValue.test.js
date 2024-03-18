import { describe, it, expect } from "vitest";
import { hasCertainValue } from "./hasCertainValue.js"; 
        
describe("hasCertainValue", function () {
  const cities = [
    {name: "San Francisco", state: "California", priceCoffee: 5},
    {name: "Oakland", state: "California", priceCoffee: 5},
  ];

  it("works for true", function () {
    expect(hasCertainValue(cities, "state", "California")).toBe(true);
  });
  it("works for false", function () {
    expect(hasCertainValue(cities, "name", "Oakland")).toBe(false);
  });
  it("works for exact vals", function () {
    expect(hasCertainValue(cities, "priceCoffee", 5)).toBe(true);
  });
  it("only matches exact values", function () {
    expect(hasCertainValue(cities, "priceCoffee", "5")).toBe(false);
  });
});