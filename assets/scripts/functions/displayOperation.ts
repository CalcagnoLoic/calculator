/**
 * This function displays the operators when users pressed on.
 * @param {string} currentValue - The first concatened number
 * @param {string} operator - Value of operator
 * @returns {displayOperationObject} Differents values to display
 */
export const displayOperation = (
    currentValue: string,
    operator: string
): displayOperationObject => {
    if (currentValue === "") return;

    const newPreviousValue = currentValue;
    const newCurrentValue = "";
    const operatorSign = operator;

    return { newPreviousValue, newCurrentValue, operatorSign };
};
