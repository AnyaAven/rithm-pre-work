import { describe, it, expect } from "vitest";
import { validAnagram } from "./validAnagram.js"; 
        
describe("validAnagram", function () {
  it("works for empty strings", function () {
    expect(validAnagram("", "")).toBe(true);
  });
  it("works for on/no", function () {
    expect(validAnagram("on", "no")).toBe(true);
  });
  it("works for aaz/zza", function () {
    expect(validAnagram("aaz", "zza")).toBe(false);
  });
  it("works for iceman/cinema", function () {
    expect(validAnagram("iceman", "cinema")).toBe(true);
  });
});