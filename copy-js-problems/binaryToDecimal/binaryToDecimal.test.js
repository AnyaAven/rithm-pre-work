import { describe, it, expect } from "vitest";
import { binaryToDecimal } from "./binaryToDecimal.js"; 
        
describe("binaryToDecimal", function () {
  it("works with 1", function () {
    expect(binaryToDecimal("1")).toBe(1);
  });
  it("works with 101", function () {
    expect(binaryToDecimal("101")).toBe(5);
  });
  it("works with 1001", function () {
    expect(binaryToDecimal("1001")).toBe(9);
  });
});