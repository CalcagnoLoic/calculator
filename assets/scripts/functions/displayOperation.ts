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
