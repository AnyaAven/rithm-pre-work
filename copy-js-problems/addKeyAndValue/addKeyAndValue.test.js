import { describe, it, expect } from "vitest";
import { addKeyAndValue } from "./addKeyAndValue.js"; 
        
describe("addKeyAndValue", function () {
  it("add_key_and_value_input_1", function () {
    expect(addKeyAndValue([{x: 1}, {y: 2}], "a", 3)).toEqual(
        [{x: 1, a: 3}, {y: 2, a: 3}]);
  });
});