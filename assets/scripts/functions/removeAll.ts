/**
 * This function deletes everything that appears on the calculator screen
 * @param {string} previousValue - Value of second number
 * @param {string} currentValue - Value of first number
 * @param {string} operationSign - Value of sign operator
 * @returns {removeAllObject} Value `empty string` and `undefined` after that elements was removed
 */
export const removeAll = (
    previousValue: string,
    currentValue: string,
    operationSign: string
): removeAllObject => {
    previousValue = "";
    currentValue = "";
    operationSign = undefined;

    return { previousValue, currentValue, operationSign };
};
