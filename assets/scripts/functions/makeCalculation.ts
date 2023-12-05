export const makeCalculation = (
    currentValue: string,
    previousValue: string,
    operation: string
): makeCalculation => {
    const firstNumber = parseFloat(currentValue);
    const secondNumber = parseFloat(previousValue);
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
    //newPreviousValue = "";
    operation = "";

    return { newCurrentValue, operation };
};
