export const displayOnCalculatorScreenForCurrentData = (
    curr,
    currVal
) => {
    //affichage de la currentValue
    curr.innerText = currVal;
}

export const displayOnCalculatorScreen = (
    curr,
    currVal = " ",
    prev,
    prevVal = " ",
    operation = " "
) => {
    //affichage de la currentValue
    curr.innerText = currVal;

    // affichage de la previousValue
    if (operation !== undefined) prev.innerText = prevVal + operation + currVal;
};
