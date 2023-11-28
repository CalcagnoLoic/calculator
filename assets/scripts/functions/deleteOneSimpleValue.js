import { displayOnCalculatorScreenForCurrentData } from "./displayOnCalculatorScreen.js";

/**
 * This function retrieves the calculator's 'delete' button from the DOM.
 * An event is then added to the click when calling the function "deleteSimpleValue" to perform
 * the following action: delete a number
 */
export const handleDelete = () => {
    const btn_del = document.getElementById("btn-del");

    btn_del.addEventListener("click", () => {
        deleteSimpleValue();
    });
};

/**
 * The purpose of this function is to delete the last element added to the number displayed
 */
const deleteSimpleValue = () => {
    const currentData = document.getElementById("currentData");
    let currentDataValue = currentData.innerText;

    currentDataValue = currentDataValue.slice(0, -1);

    displayOnCalculatorScreenForCurrentData(currentData, currentDataValue);
};
