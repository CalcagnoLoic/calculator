/**
 * Function to perform the mathematical operation
 * @param {string} currentValue - Value of first number
 * @param {string} previousValue - Value of second number
 * @param {string} operation - Value of operator
 * @param {Node} nodeCurrent - Node of the main line of calculator screen
 * @param {Node} nodePrevious - Node of the secondary line of calculator screen
 * @returns {string|void}
 */
export const makeCalculation = (
    currentValue,
    previousValue,
    operation,
    nodeCurrent,
    nodePrevious
) => {
    let firstNumber = parseFloat(currentValue);
    let secondNumber = parseFloat(previousValue);
    let newCurrentValue = nodeCurrent.innerText;
    let newPreviousValue = nodePrevious.innerText;
    let result;

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

    newCurrentValue = result;
    newPreviousValue = "";
    operation = "";

    return { newCurrentValue, newPreviousValue, operation };
};
