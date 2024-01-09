import { displayCalculation } from "./utils/displayCalculation.js";
import { deleteOneSimpleValue } from "./utils/deleteOneSimpleValue.js";
import { removeAll } from "./utils/removeAll.js";
import { displayOnCalculatorScreenForCurrentData } from "./utils/displayOnCalculatorScreen.js";
import { displayOnCalculatorScreen } from "./utils/displayOnCalculatorScreen.js";
import { makeCalculation } from "./utils/makeCalculation.js";

const handleOperand = (): void => {
  const operands = document.querySelectorAll(".operand");

  operands.forEach((operand) => {
    operand.addEventListener("click", () => {
      const currentData = document.getElementById("currentData");
      const currentDataValue = currentData.innerText;
      const operandValue = operand.innerHTML;

      const result = displayCalculation(operandValue, currentDataValue);

      displayOnCalculatorScreenForCurrentData(currentData, result);
    });
  });
};

const handleOperation = (): void => {
  const operators = document.querySelectorAll(".operation");

  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      const currentData = document.getElementById("currentData");
      const previousData = document.getElementById("previousData");

      const currentDataValue = currentData.innerText;
      const operatorSign = operator.innerHTML;
      const newCurrentValue = "";

      displayOnCalculatorScreen(
        currentData,
        newCurrentValue,
        previousData,
        currentDataValue,
        operatorSign,
      );
    });
  });
};

const handleDelete = (): void => {
  const btn_del = document.getElementById("btn-del");

  btn_del.addEventListener("click", () => {
    const currentData = document.getElementById("currentData");
    const currentDataValue = currentData.innerText;

    const result = deleteOneSimpleValue(currentDataValue);

    displayOnCalculatorScreenForCurrentData(currentData, result);
  });
};

const handleRemove = (): void => {
  const reset = document.getElementById("reset");

  reset.addEventListener("click", () => {
    const currentData = document.getElementById("currentData");
    const previousData = document.getElementById("previousData");
    const currentDataValue = currentData.innerText;
    const previousDataValue = previousData.innerText;
    let operation: string;

    const { previousValue, currentValue, operationSign } = removeAll(
      previousDataValue,
      currentDataValue,
      operation,
    );

    displayOnCalculatorScreen(
      currentData,
      currentValue,
      previousData,
      previousValue,
      operationSign,
    );
  });
};

const handleSwitchTheme = (): void => {
  const theme = document.querySelector(".theme");

  const toggleInputs = document.querySelectorAll(".toggle-input");

  toggleInputs.forEach((input) => {
    input.addEventListener("click", (e) => {
      const target = e.target as HTMLTextAreaElement;
      const themeValue = target.value;

      theme.classList.remove("theme-1");
      theme.classList.remove("theme-2");
      theme.classList.remove("theme-3");

      theme.classList.add(themeValue);
    });
  });
};

const handleCalculation = (): void => {
  const result_btn = document.getElementById("calculation");

  result_btn.addEventListener("click", () => {
    const currentData = document.getElementById("currentData");
    const previousData = document.getElementById("previousData");
    const currentDataValue = currentData.innerText;
    const previousDataValue = previousData.innerText;
    const operationSign = previousDataValue.substring(
      previousDataValue.length - 1,
    );

    const { newCurrentValue, operation } = makeCalculation(
      currentDataValue,
      previousDataValue,
      operationSign,
    );

    const newPreviousValue = "";

    displayOnCalculatorScreen(
      currentData,
      String(newCurrentValue),
      previousData,
      newPreviousValue,
      operation,
    );
  });
};

const main = (): void => {
  handleOperand();
  handleOperation();
  handleDelete();
  handleRemove();
  handleSwitchTheme();
  handleCalculation();
};

main();
