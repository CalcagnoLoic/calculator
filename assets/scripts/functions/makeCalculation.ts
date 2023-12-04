/**
 * Function to perform the mathematical operation
 * @param {string} currentValue - Value of first number
 * @param {string} previousValue - Value of second number
 * @param {string} operation - Value of operator
 * @param {HTMLDivElement|HTMLElement} nodePrevious - Node of the secondary line of calculator screen
 * @returns {makeCalculationObject}
 */
export const makeCalculation = (
    currentValue: string,
    previousValue: string,
    operation: string,
    nodePrevious: HTMLDivElement | HTMLElement
): makeCalculationObject => {
    const firstNumber = parseFloat(currentValue);
    const secondNumber = parseFloat(previousValue);
    let newPreviousValue = nodePrevious.innerText;
    let result: number;

    if (isNaN(firstNumber) || isNaN(secondNumber)) return;

    switch (operation) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = secondNumber - firstNumber;
            break;
        case "x":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = secondNumber / firstNumber;
            break;
        default:
            return;
    }

    const newCurrentValue = Number(result);
    newPreviousValue = "";
    operation = "";

    return { newCurrentValue, newPreviousValue, operation };
};
