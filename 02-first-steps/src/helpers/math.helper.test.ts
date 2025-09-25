import { describe, expect, test } from "vitest";
import { add, multiply, substract } from "./math.helper";

describe("add", () => {
  test("should add two positives numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;
    // ! 2. Act
    const result = add(a, b);
    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("substract", () => {
  test("should subtract two positives numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;
    // ! 2. Act
    const result = substract(a, b);
    // ! 3. Assert
    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("should multiply two positives numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;
    // ! 2. Act
    const result = multiply(a, b);
    // ! 3. Assert
    expect(result).toBe(a * b);
  });
});
