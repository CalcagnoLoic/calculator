import { displayCalculation } from "./functions/displayCalculation.js";
import { displayOperation } from "./functions/displayOperation.js";
import { deleteOneSimpleValue } from "./functions/deleteOneSimpleValue.js";
import { removeAll } from "./functions/removeAll.js";
import { displayOnCalculatorScreenForCurrentData } from "./functions/displayOnCalculatorScreen.js";
import { displayOnCalculatorScreen } from "./functions/displayOnCalculatorScreen.js";
import { makeCalculation } from "./functions/makeCalculation.js";

/**
 * Function linked to numeric button actions
 */
const handleOperand = () => {
    const operands = document.querySelectorAll(".operand");

    operands.forEach(operand => {
        operand.addEventListener("click", () => {
            const currentData = document.getElementById("currentData");
            const currentDataValue = currentData.innerText;
            const operandValue = operand.innerText;

            let result = displayCalculation(operandValue, currentDataValue);

            displayOnCalculatorScreenForCurrentData(currentData, result);
        });
    });
};

/**
 * Function linked to operator button actions
 */
const handleOperation = () => {
    const operators = document.querySelectorAll(".operation");

    operators.forEach(operator => {
        operator.addEventListener("click", () => {
            const currentData = document.getElementById("currentData");
            const previousData = document.getElementById("previousData");
            const currentDataValue = currentData.innerText;
            let operatorValue = operator.innerText;

            let { newPreviousValue, newCurrentValue, operatorSign } =
                displayOperation(currentDataValue, operatorValue);

            displayOnCalculatorScreen(
                currentData,
                newCurrentValue,
                previousData,
                newPreviousValue,
                operatorSign
            );
        });
    });
};

/**
 * Function linked to the DEL delete button action
 */
const handleDelete = () => {
    const btn_del = document.getElementById("btn-del");

    btn_del.addEventListener("click", () => {
        const currentData = document.getElementById("currentData");
        const currentDataValue = currentData.innerText;

        let result = deleteOneSimpleValue(currentDataValue);

        displayOnCalculatorScreenForCurrentData(currentData, result);
    });
};

/**
 * Function linked to RESET delete button action
 */
const handleRemove = () => {
    const reset = document.getElementById("reset");

    reset.addEventListener("click", () => {
        const currentData = document.getElementById("currentData");
        const previousData = document.getElementById("previousData");
        const currentDataValue = currentData.innerText;
        const previousDataValue = previousData.innerText;
        let operation;

        let { previousValue, currentValue, operationSign } = removeAll(
            previousDataValue,
            currentDataValue,
            operation
        );

        displayOnCalculatorScreen(
            currentData,
            currentValue,
            previousData,
            previousValue,
            operationSign
        );
    });
};

/**
 * Toggle function for different themes
 */
const handleSwitchTheme = () => {
    const theme = document.querySelector(".theme");

    const toggleInputs = document.querySelectorAll(".toggle-input");

    toggleInputs.forEach(input => {
        input.addEventListener("click", e => {
            const themeValue = e.target.value;

            theme.classList.remove("theme-1");
            theme.classList.remove("theme-2");
            theme.classList.remove("theme-3");

            theme.classList.add(themeValue);
        });
    });
};

/**
 * Function linked to mathematical result
 */
const handleCalculation = () => {
    const result_btn = document.getElementById("calculation");

    result_btn.addEventListener("click", () => {
        const currentData = document.getElementById("currentData");
        const previousData = document.getElementById("previousData");
        const currentDataValue = currentData.innerText;
        const previousDataValue = previousData.innerText;
        let operationSign = previousDataValue.substring(
            previousDataValue.length - 1
        );

        let { newCurrentValue, newPreviousValue, operation } = makeCalculation(
            currentDataValue,
            previousDataValue,
            operationSign,
            currentData,
            previousData
        );

        console.log(newPreviousValue);

        displayOnCalculatorScreen(
            currentData,
            newCurrentValue,
            previousData,
            newPreviousValue,
            operation
        );
    });
};

const main = () => {
    handleOperand();
    handleOperation();
    handleDelete();
    handleRemove();
    handleSwitchTheme();
    handleCalculation();
};

main();
