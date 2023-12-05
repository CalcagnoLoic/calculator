import { displayCalculation } from "./functions/displayCalculation.js";
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
            const operandValue = operand.innerHTML;

            const result = displayCalculation(operandValue, currentDataValue);

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
            const operatorSign = operator.innerHTML;
            const newCurrentValue = "";

            displayOnCalculatorScreen(
                currentData,
                newCurrentValue,
                previousData,
                currentDataValue,
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

        const result = deleteOneSimpleValue(currentDataValue);

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
        let operation: string;

        const { previousValue, currentValue, operationSign } = removeAll(
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
            const target = e.target as HTMLTextAreaElement;
            const themeValue = target.value;

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
        const operationSign = previousDataValue.substring(
            previousDataValue.length - 1
        );

        const { newCurrentValue, operation } = makeCalculation(
            currentDataValue,
            previousDataValue,
            operationSign
        );

        const newPreviousValue = "";

        displayOnCalculatorScreen(
            currentData,
            String(newCurrentValue),
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
