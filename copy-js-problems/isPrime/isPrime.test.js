import { describe, it, expect } from "vitest";
import { isPrime } from "./isPrime.js"; 
        
describe("isPrime", function () {
  it("works with 0", function () {
    expect(isPrime(0)).toBe(false);
  });
  it("works with 1", function () {
    expect(isPrime(1)).toBe(false);
  });
  it("works with 2", function () {
    expect(isPrime(2)).toBe(true);
  });
  it("works with 3", function () {
    expect(isPrime(3)).toBe(true);
  });
  it("works with 7", function () {
    expect(isPrime(7)).toBe(true);
  });
  it("works with 8", function () {
    expect(isPrime(8)).toBe(false);
  });
  it("works with 9", function () {
    expect(isPrime(9)).toBe(false);
  });
  it("works with NaN", function () {
    expect(isPrime(NaN)).toBe(false);
  });
});