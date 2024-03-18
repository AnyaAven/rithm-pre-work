import { describe, it, expect } from "vitest";
import { padEnd } from "./padEnd.js"; 
        
describe("padEnd", function () {
  it("works with input 1", function () {
    expect(padEnd("abc", 6)).toEqual("abc   ");
  });
  it("works with input 2", function () {
    expect(padEnd("hi", 10)).toEqual("hi        ");
  });
  it("works with input 3", function () {
    expect(padEnd("hello", 5)).toEqual("hello");
  });
  it("works with input 4", function () {
    expect(padEnd("hello", 1)).toEqual("hello");
  });
  it("works with input 5", function () {
    expect(padEnd("abc", 7, "xyz")).toEqual("abcxyzx");
  });
  it("works with input 6", function () {
    expect(padEnd("hi", 10, " you")).toEqual("hi you you");
  });
});