import { describe, it, expect } from "vitest";
import { removeAll } from "./removeAll";

describe("removeAll Unit Test Suite", () => {
  it("should return something", () => {
    expect(removeAll("15", "10", "+")).toBeDefined();
  });

  it("should delete all value passed in arguments", () => {
    expect(removeAll("15", "10", "+")).toStrictEqual({
      previousValue: "",
      currentValue: "",
      operationSign: undefined,
    });
  });
});
