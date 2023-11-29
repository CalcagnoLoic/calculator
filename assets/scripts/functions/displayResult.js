/* eslint-disable no-unused-vars */
import { makeCalculation } from "./makeCalculation.js";

export const handleResult = () => {
    const result_btn = document.getElementById("calculation");

    result_btn.addEventListener("click", () => {
        makeCalculation(operation);
    });
};
