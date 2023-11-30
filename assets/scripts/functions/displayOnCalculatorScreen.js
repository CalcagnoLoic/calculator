/**
 * This function displays the result of the main line on the calculator screen.
 * @param {Node} curr - Node of current value
 * @param {string} currVal - Current value of the main line
 */
export const displayOnCalculatorScreenForCurrentData = (curr, currVal) => {
    //affichage de la currentValue
    curr.innerText = currVal;
};

/**
 * This function displays the result of the main and secondary lines on the calculator screen.
 * @param {Node} curr - Node of current value
 * @param {string} currVal - Current value of the main line
 * @param {Node} prev - Node of previous value on the screen
 * @param {string} prevVal - Previous value on the secondary line on the screen
 * @param {string} operation - The operator of calculation
 */
export const displayOnCalculatorScreen = (
    curr,
    currVal,
    prev,
    prevVal,
    operation
) => {
    //affichage de la currentValue
    curr.innerText = currVal;

    // affichage de la previousValue
    if (operation !== undefined) prev.innerText = prevVal + operation + currVal;
    if(operation === "") prev.innerText = ""
};
