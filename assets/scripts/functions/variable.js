export const variable = () => {
    const currentData = document.getElementById("currentData");
    const previousData = document.getElementById("previousData");
    let currentDataValue = currentData.innerText;
    let previousDataValue = previousData.innerText;
    let operation;

    return (
        currentData,
        previousData,
        currentDataValue,
        previousDataValue,
        operation
    );
};
