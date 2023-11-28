import { displayOnCalculatorScreen } from "./displayOnCalculatorScreen.js";

export const handleOperand = () => {
    const operands = document.querySelectorAll(".operand");

    operands.forEach(operand => {
        operand.addEventListener("click", () => {
            displayCalculation(operand.innerText);
        });
    });
};

const displayCalculation = newValue => {
    const currentData = document.getElementById("currentData");
    let currentDataValue = currentData.innerText;

    currentDataValue = currentDataValue + newValue;

    displayOnCalculatorScreen(currentData, currentDataValue);
};
