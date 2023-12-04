/**
 * This function concatenates numbers as the user presses the buttons.
 * @param {string} newValue - Value of added number
 * @param {string} currentValue - Value of existing number
 * @returns {string} The concatened number
 */
export const displayCalculation = (
    newValue: string,
    currentValue: string
): string => {
    return currentValue + newValue;
};
