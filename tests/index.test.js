const { add, greet } = require("../src");

describe("BasicAddition", () => {
  test("adds positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds a negative and a positive number", () => {
    expect(add(-1, 1)).toBe(0);
  });

  test("adds zero values", () => {
    expect(add(0, 0)).toBe(0);
  });
});

describe("Greeting", () => {
  test("greets the default world", () => {
    expect(greet()).toBe("Hello, World!");
  });

  test("greets a named person", () => {
    expect(greet("Oleh")).toBe("Hello, Oleh!");
  });
});
