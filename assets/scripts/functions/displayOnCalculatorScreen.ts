export const displayOnCalculatorScreenForCurrentData = (
    curr: HTMLElement,
    currVal: string
): void => {
    //affichage de la currentValue
    curr.innerText = currVal;
};


export const displayOnCalculatorScreen = (
    curr: HTMLElement,
    currVal: string,
    prev: HTMLElement,
    prevVal: string,
    operation: string
): void => {
    //affichage de la currentValue
    curr.innerText = currVal;

    // affichage de la previousValue
    if (operation !== undefined) prev.innerText = prevVal + operation + currVal;
    if (operation === "") prev.innerText = "";
};
