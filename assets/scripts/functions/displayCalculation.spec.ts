import { describe, it, expect } from "vitest";
import { displayCalculation } from "./displayCalculation";

describe("displayCalculation Unit Test Suites", () => {
    it("should return something", () => {
        expect(displayCalculation("1", "2")).toBeDefined();
    });
    it("should return a string", () => {
        expect(typeof displayCalculation("1", "2")).toBe("string");
    });
    it("should return the result of concatenation", () => {
        expect(displayCalculation("1", "2")).toBe("21");
        expect(displayCalculation("1", "256")).toBe("2561");
    });
});
