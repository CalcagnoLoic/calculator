/***********************************
 * Récupération des éléments du DOM
 ***********************************/
const operands = document.querySelectorAll("#operand");
const input = document.querySelectorAll("input");
const btn_del = document.getElementById("btn-del");
const operators = document.querySelectorAll("#operation");
const reset = document.getElementById("reset");
const calculate = document.getElementById("calculation");
const dot = document.getElementById("dot");
const previousData = document.getElementById("previousData");
let previousDataValue = previousData.innerText;
const currentData = document.getElementById("currentData");
let currentDataValue = currentData.innerText;

/*********************
 * Logique appliquée
 ********************/
operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        displayCalculation(operand.innerText);
        display();
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {

    })
})

btn_del.addEventListener("click", () => {
    deleteSimpleValue();
    display();
});

reset.addEventListener("click", () => {
    removeAll();
    display()
});

/************
 * Fonctions
 ************/

/**
 * Permet l'affichage après une action
 */
const display = () => {
    currentData.innerText = currentDataValue;
};

/**
 * Function permettant d'écrire le calcul dans la calculatrice
 * @param {*} newValue
 */
const displayCalculation = (newValue) => {
    currentDataValue = currentDataValue.toString() + newValue.toString();
};

const deleteSimpleValue = () => {
    currentDataValue = currentDataValue.toString().slice(0, -1);
};

/**
 * Fonction permettant la suppression
 */
const removeAll = () => {
    previousDataValue = "";
    currentDataValue = "";
};
