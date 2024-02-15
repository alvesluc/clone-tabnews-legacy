const { add } = require("../../models/calculator.js");

/* 
  This file isn't used on the project itself. But for history purposes I've
  decided to keep it.
*/

test("should return the sum of two valid numbers", () => {
  const result = add(40, 2);

  expect(result).toBe(42);
});

test("should return 'Error' when one of the inputs is a string", () => {
  const result = add("foo", 42);

  expect(result).toBe("Error");
});

test("should return 'Error' when one of the inputs is null", () => {
  const result = add(null, 42);

  expect(result).toBe("Error");
});

test("should return 'Error' when one of the inputs is undefined", () => {
  const result = add(undefined, 42);

  expect(result).toBe("Error");
});

test("should return 'Error' when both inputs are not numbers", () => {
  const result = add("foo", "bar");

  expect(result).toBe("Error");
});

test("should return the valid number when adding zero", () => {
  const result = add(42, 0);

  expect(result).toBe(42);
});

test("should correctly add negative numbers", () => {
  const result = add(44, -2);

  expect(result).toBe(42);
});

test("should correctly add decimal numbers", () => {
  const result = add(40.5, 1.5);

  expect(result).toBe(42);
});