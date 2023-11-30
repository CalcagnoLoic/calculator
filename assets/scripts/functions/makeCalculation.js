export const makeCalculation = (
    currentValue,
    previousValue,
    operation,
    nodeCurrent,
    nodePrevious
) => {
    let firstNumber = parseFloat(currentValue);
    let secondNumber = parseFloat(previousValue);
    let newCurrentValue = nodeCurrent.innerText
    let newPreviousValue = nodePrevious.innerText
    let result;

    if (isNaN(firstNumber) || isNaN(secondNumber)) return;

    switch (operation) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "x":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        default:
            return;
    }

    newCurrentValue = result;
    newPreviousValue = firstNumber + operation + secondNumber;
    operation = "";

    return { newCurrentValue, newPreviousValue, operation };
};
