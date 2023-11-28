import { displayOnCalculatorScreen } from "./displayOnCalculatorScreen.js";

/**
 * This function retrieves the calculator's operators buttons from the DOM.
 * An event is then added to the click when calling the function "displayOperation" to perform
 * the following action:  add an operator between previous and current number
 */
export const handleOperations = () => {
    const operators = document.querySelectorAll(".operation");

    operators.forEach(operator => {
        operator.addEventListener("click", () => {
            displayOperation(operator.innerText);
        });
    });
};

/**
 * This function displays the operators when users pressed on.
 * @param {string} operate - Value of operator
 */
const displayOperation = operate => {
    const currentData = document.getElementById("currentData");
    const previousData = document.getElementById("previousData");
    let currentDataValue = currentData.innerText;
    let previousDataValue = previousData.innerText;
    let operation;

    //si l'utilisateur commence par une opération
    if (currentDataValue === "") return;

    operation = operate;
    previousDataValue = currentDataValue;
    currentDataValue = "";

    displayOnCalculatorScreen(
        currentData,
        currentDataValue,
        previousData,
        previousDataValue,
        operation
    );
};
