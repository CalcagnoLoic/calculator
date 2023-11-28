import { displayOnCalculatorScreen } from "./displayOnCalculatorScreen.js";

/**
 * This function retrieves the calculator's 'reset' button from the DOM.
 * An event is then added to the click when calling the function "displayOperation" to perform
 * the following action: reset all value on the calculator's screen
 */
export const handleRemove = () => {
    const reset = document.getElementById("reset");

    reset.addEventListener("click", () => {
        removeAll();
    });
};

/**
 * This function deletes everything that appears on the calculator screen
 */
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
