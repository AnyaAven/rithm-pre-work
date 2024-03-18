import { describe, it, expect } from "vitest";
import { isOddString } from "./isOddString.js"; 
        
describe("isOddString", function () {
  it("works: a=true", function () {
    expect(isOddString("a")).toBe(true);
  });
  it("works: aaa=true", function () {
    expect(isOddString("aaa")).toBe(true);
  });
  it("works: abc=false", function () {
    expect(isOddString("abc")).toBe(false);
  });
});