/**
 * This function deletes everything that appears on the calculator screen
 * @param {string} previousValue - Value of second number
 * @param {string} currentValue - Value of first number
 * @param {string} operation - Value of sign operator
 * @returns {string|undefined} Value `empty string` and `undefined` after that elements was removed
 */
export const removeAll = (previousValue, currentValue, operation) => {
    previousValue = "";
    currentValue = "";
    operation = undefined;

    return { previousValue, currentValue, operation };
};
