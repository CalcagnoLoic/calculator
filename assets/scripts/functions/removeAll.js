import { displayOnCalculatorScreen } from "./displayOnCalculatorScreen.js";

export const handleRemove = () => {
    const reset = document.getElementById("reset");

    reset.addEventListener("click", () => {
        removeAll();
    });
};

const removeAll = () => {
    const currentData = document.getElementById("currentData");
    const previousData = document.getElementById("previousData");
    let currentDataValue = currentData.innerText;
    let previousDataValue = previousData.innerText;
    let operation;

    previousDataValue = "";
    currentDataValue = "";
    operation = undefined;

    displayOnCalculatorScreen(
        currentData,
        currentDataValue,
        previousData,
        previousDataValue,
        operation
    );
};
