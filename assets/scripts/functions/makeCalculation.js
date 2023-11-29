import { displayOnCalculatorScreen } from "./displayOnCalculatorScreen.js";

export const makeCalculation = operation => {
    const currentData = document.getElementById("currentData");
    const previousData = document.getElementById("previousData");
    let currentDataValue = currentData.innerText;
    let previousDataValue = previousData.innerText;
    let result;

    let firstNumber = parseFloat(currentDataValue);
    let secondNumber = parseFloat(previousDataValue);
    if (isNaN(firstNumber) || isNaN(secondNumber)) return;

    switch (operation) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        default:
            return;
    }

    currentData.innerText = result;
    previousData.innerText = " ";
    operation = undefined;

    displayOnCalculatorScreen(
        currentData,
        currentDataValue,
        previousData,
        previousDataValue,
        operation
    );
};
