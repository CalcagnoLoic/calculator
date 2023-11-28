import { displayOnCalculatorScreenForCurrentData } from "./displayOnCalculatorScreen.js";

/**
 * This function retrieves the calculator's numeric buttons from the DOM.
 * An event is then added to the click when calling the function "displayCalculation" to perform
 * the following action: concatenate a number
 */
export const handleOperand = () => {
    const operands = document.querySelectorAll(".operand");

    operands.forEach(operand => {
        operand.addEventListener("click", () => {
            displayCalculation(operand.innerText);
        });
    });
};

/**
 * This function concatenates numbers as the user presses the buttons.
 * @param {string} newValue - Value of added number
 */
const displayCalculation = newValue => {
    const currentData = document.getElementById("currentData");
    let currentDataValue = currentData.innerText;

    currentDataValue = currentDataValue + newValue;

    displayOnCalculatorScreenForCurrentData(currentData, currentDataValue);
};
