import { describe, it, expect } from "vitest";
import { deleteOneSimpleValue } from "./deleteOneSimpleValue";

describe("deleteOneSimpleValue Unit Test Suites", () => {
    it("should return something", () => {
        expect(deleteOneSimpleValue("25")).toBeDefined;
    });
    it("should return a string", () => {
        expect(typeof deleteOneSimpleValue("25")).toBe("string");
    });
    it("should slice the last string", () => {
        expect(deleteOneSimpleValue("25")).toBe("2");
    });
});
