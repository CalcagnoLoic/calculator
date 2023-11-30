/**
 * This function displays the operators when users pressed on.
 * @param {string} operate - Value of operator
 */
export const displayOperation = (currentValue, operator) => {
    if (currentValue === "")
        return alert("You must have a calculation before doing an operation!");

    let newPreviousValue = currentValue;
    let newCurrentValue = "";
    let operatorSign = operator;

    return { newPreviousValue, newCurrentValue, operatorSign };
};
