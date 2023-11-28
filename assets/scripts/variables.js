// ENLEVER DU GITIGNORE QUAND OK

export const operands = document.querySelectorAll(".operand");
export const btn_del = document.getElementById("btn-del");
export const operators = document.querySelectorAll(".operation");
export const reset = document.getElementById("reset");
export const calculate = document.getElementById("calculation");
export const previousData = document.getElementById("previousData");
export const currentData = document.getElementById("currentData");

export let previousDataValue = previousData.innerText;
export let currentDataValue = currentData.innerText;
export let operation;
