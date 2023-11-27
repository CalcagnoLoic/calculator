const operands = document.querySelectorAll("#operand");
const btn_del = document.getElementById("btn-del");
const btn_plus = document.getElementById("btn_+");
const btn_minus = document.getElementById("btn_-");
const btn_divide = document.getElementById("btn_divide");
const btn_multiply = document.getElementById("btn_multiply");
const reset = document.getElementById("reset");
const calculate = document.getElementById("calculation");
const dot = document.getElementById("dot");
const display_calculation = document.getElementById("display");
const result = document.getElementById("result");

operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        display_calculation.innerText = operand.value;
    });
});
