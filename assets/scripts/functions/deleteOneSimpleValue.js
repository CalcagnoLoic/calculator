import { displayOnCalculatorScreen } from "./displayOnCalculatorScreen.js";

export const handleDelete = () => {
    const btn_del = document.getElementById("btn-del");

    btn_del.addEventListener("click", () => {
        deleteSimpleValue();
    });
};

const deleteSimpleValue = () => {
    const currentData = document.getElementById("currentData");
    const previousData = document.getElementById("previousData");
    let currentDataValue = currentData.innerText;
    let previousDataValue = previousData.innerText;

    currentDataValue = currentDataValue.slice(0, -1);

    displayOnCalculatorScreen(
        currentData,
        currentDataValue,
        previousData,
        previousDataValue
    );
};
