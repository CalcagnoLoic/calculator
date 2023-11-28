import { displayOnCalculatorScreen } from "./displayOnCalculatorScreen.js";

export const handleOperations = () => {
    const operators = document.querySelectorAll(".operation");

    operators.forEach(operator => {
        operator.addEventListener("click", () => {
            displayOperation(operator.innerText);
            //console.log(operator.innerText);
        });
    });
};

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
