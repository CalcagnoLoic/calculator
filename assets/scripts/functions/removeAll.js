/**
 * This function deletes everything that appears on the calculator screen
 */
export const removeAll = (previousValue, currentValue, operation) => {
    previousValue = "";
    currentValue = "";
    operation = undefined;

    return { previousValue, currentValue, operation };
};
