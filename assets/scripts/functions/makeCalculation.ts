
// A tester
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
    newPreviousValue = ""; // Ce traitement va plutôt dans handleCalculation
    operation = "";

    console.log(currentValue)
    console.log(previousValue)
    console.log(operation)
    console.log(nodePrevious)

    return { newCurrentValue, newPreviousValue, operation };
};
