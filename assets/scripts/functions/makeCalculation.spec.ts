import { describe, it, expect } from "vitest";
import { makeCalculation } from "./makeCalculation";

describe("makeCalculation Unit Test Suites", () => {
    it("should return something", () => {
        expect(makeCalculation("15", "10", "+")).toBeDefined();
    });
    it("should return the good object with result", () => {
        expect(makeCalculation("15", "10", "+")).toStrictEqual({
            newCurrentValue: 25,
            operation: ""
        });
    });
    it("should return if number is NaN", () => {
        expect(makeCalculation("NaN", "hello", "+")).toBeFalsy();
    });

    it("should return the good result for addition", () => {
        expect(makeCalculation("9", "7", "+")).toStrictEqual({
            newCurrentValue: 16,
            operation: ""
        });
    });
    it("should return the good result for multiplication", () => {
        expect(makeCalculation("9", "7", "x")).toStrictEqual({
            newCurrentValue: 63,
            operation: ""
        });
    });
    it("should return the good result for substraction", () => {
        expect(makeCalculation("9", "7", "-")).toStrictEqual({
            newCurrentValue: -2,
            operation: ""
        });
    });
    it("should return the good result for division", () => {
        expect(makeCalculation("7", "9", "/")).toStrictEqual({
            newCurrentValue: 1.286,
            operation: ""
        });
    });
});
