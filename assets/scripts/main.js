/***********************************
 * Récupération des éléments du DOM
 ***********************************/
const operands = document.querySelectorAll("#operand");
const input = document.querySelectorAll("input");
const btn_del = document.getElementById("btn-del");
const operators = document.querySelectorAll("#operation");
const reset = document.getElementById("reset");
const calculate = document.getElementById("calculation");
const dot = document.getElementById("dot"); //TESTER EN LE METTANT DANS LES OPERANDS
const previousData = document.getElementById("previousData");
let previousDataValue = previousData.innerText;
const currentData = document.getElementById("currentData");
let currentDataValue = currentData.innerText;
let operation;

/*********************
 * Logique appliquée
 ********************/
operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        displayCalculation(operand.innerText);
        display();
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        displayOperation(operator.innerText);
        display();
    });
});

btn_del.addEventListener("click", () => {
    deleteSimpleValue();
    display();
});

reset.addEventListener("click", () => {
    removeAll();
    display();
});

/************
 * Fonctions
 ************/

/**
 * Function permettant d'écrire le calcul dans la calculatrice
 * @param {*} newValue
 */
const displayCalculation = (newValue) => {
    currentDataValue = currentDataValue.toString() + newValue.toString();
};

/**
 *
 * @param {*} operate
 * @returns
 */
const displayOperation = (operate) => {
    //si l'utilisateur commence par une opération
    if (currentDataValue === "") return;

    operation = operate;
    previousDataValue = currentDataValue;
    currentDataValue = "";
};

/**
 *
*/
const deleteSimpleValue = () => {
    currentDataValue = currentDataValue.toString().slice(0, -1);
};

/**
 * Fonction permettant la suppression
*/
const removeAll = () => {
    previousData.innerText = "";
    currentDataValue = "";
    operation = undefined;
};

/**
 * Permet l'affichage après une action
 */
const display = () => {
    //affichage de la currentValue
    currentData.innerText = currentDataValue;

    // affichage de la previousValue
    if (operation !== undefined)
        previousData.innerText =
            previousDataValue + operation + currentDataValue;
};