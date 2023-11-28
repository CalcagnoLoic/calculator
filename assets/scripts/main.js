"use strict";

/***********************************
 * Récupération des éléments du DOM  // NE PAS METTRE EN HAUT DU FICHIER, APPELER EN SCOPANT UNE FONCTION
 ***********************************/
const operands = document.querySelectorAll(".operand");
const btn_del = document.getElementById("btn-del");
const operators = document.querySelectorAll(".operation");
const reset = document.getElementById("reset");
const calculate = document.getElementById("calculation");
const previousData = document.getElementById("previousData");
const currentData = document.getElementById("currentData");

let previousDataValue = previousData.innerText;
let currentDataValue = currentData.innerText;
let operation;

/*********************
 * Logique appliquée //INCLURE LA LOGIQUE DANS DES FONCTIONS
 ********************/
//const handleOperands =()

operands.forEach(operand => {
    operand.addEventListener("click", () => {
        displayCalculation(operand.innerText);
        display();
    });
});

operators.forEach(operator => {
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

/*************************************
 * Fonctions d'affichage des calculs
 *************************************/

/**
 * Function permettant d'écrire le nombre par concaténation dans la calculatrice
 * @param {string} newValue -
 */
const displayCalculation = newValue => {
    currentDataValue = currentDataValue + newValue;
};

/**
 *
 * @param {string} operate -
 * @returns
 */
const displayOperation = operate => {
    //si l'utilisateur commence par une opération
    if (currentDataValue === "") return;

    operation = operate;
    previousDataValue = currentDataValue;
    currentDataValue = "";
};

/**************************************
 * Fonctions de suppression d'éléments
 **************************************/
/**
 * Fonction permettant de supprimer un chiffre au nombre écrit
 */
const deleteSimpleValue = () => {
    currentDataValue = currentDataValue.slice(0, -1);
};

/**
 * Fonction permettant la suppression
 */
const removeAll = () => {
    previousData.innerText = "";
    currentDataValue = "";
    operation = undefined;
};

/*********************************
 * Fonction d'affichage pour l'UI
 *********************************/
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

/********************************************
 * Fonction d'affichage du résultat final
 ********************************************/
const calculateResult = () => {
    let firstNumber = parseFloat(currentDataValue);
    let secondNumber = parseFloat(previousDataValue);
    let result;

    switch (operation) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
    }
};
