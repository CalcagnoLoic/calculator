export const displayOnCalculatorScreenForCurrentData = (
  curr: HTMLElement,
  currVal: string,
): void => {
  curr.innerText = currVal;
};

export const displayOnCalculatorScreen = (
  curr: HTMLElement,
  currVal: string,
  prev: HTMLElement,
  prevVal: string,
  operation: string,
): void => {
  curr.innerText = currVal;

  if (operation !== undefined) prev.innerText = prevVal + operation + currVal;
  if (operation === "") prev.innerText = "";
};
