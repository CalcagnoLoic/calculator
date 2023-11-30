import { displayCalculation } from "./functions/displayCalculation.js";
import { handleOperations } from "./functions/displayOperation.js";
import { handleRemove } from "./functions/removeAll.js";
import { handleDelete } from "./functions/deleteOneSimpleValue.js";
import { handleResult } from "./functions/displayResult.js";
import { displayOnCalculatorScreenForCurrentData } from "./functions/displayOnCalculatorScreen.js";


handleOperations();
handleDelete();
handleRemove();
handleResult();


export const handleOperand = () => {
    const operands = document.querySelectorAll(".operand");

    operands.forEach(operand => {
        operand.addEventListener("click", () => {
            const currentData = document.getElementById("currentData");

            const operandValue = operand.innerText
            const currentDataValue = currentData.innerText;

            const result = displayCalculation(operandValue, currentDataValue);
            displayOnCalculatorScreenForCurrentData(currentData, result);
        });
    });
};



function handleTheme() {
    const theme = document.querySelector(".theme");
    const toggleInputs = document.querySelectorAll('.toggle-input')

    toggleInputs.forEach(input => {
        input.addEventListener('click', function(e) {
            const selectedTheme = e.target.value

            theme.classList.remove("theme-1");
            theme.classList.remove("theme-2");
            theme.classList.remove("theme-3");
            
            theme.classList.add(selectedTheme);
        })
    })
}


function main() {
    handleTheme()
    handleOperand();
}

main()
