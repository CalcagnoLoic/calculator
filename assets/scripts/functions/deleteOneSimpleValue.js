import { displayOnCalculatorScreenForCurrentData } from "./displayOnCalculatorScreen.js";

export const handleDelete = () => {
    const btn_del = document.getElementById("btn-del");

    btn_del.addEventListener("click", () => {
        deleteSimpleValue();
    });
};

const deleteSimpleValue = () => {
    const currentData = document.getElementById("currentData");
    let currentDataValue = currentData.innerText;

    currentDataValue = currentDataValue.slice(0, -1);

    displayOnCalculatorScreenForCurrentData(currentData, currentDataValue);
};
