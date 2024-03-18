import { describe, it, expect } from "vitest";
import { hasNoDuplicates } from "./hasNoDuplicates.js"; 
        
describe("hasNoDuplicates", function () {
  it("works for dupes", function () {
    expect(hasNoDuplicates([1, 2, 3, 1])).toBe(false);
  });
  it("works for no-dupes", function () {
    expect(hasNoDuplicates([1, 2, 3])).toBe(true);
  });
});