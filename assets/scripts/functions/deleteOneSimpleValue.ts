/**
 * The purpose of this function is to delete the last element added to the number displayed
 * @param {string} currentData - The number
 * @returns {string} The number without the last character
 */

export const deleteOneSimpleValue = (currentData: string): string => {
    return currentData.slice(0, -1);
};
