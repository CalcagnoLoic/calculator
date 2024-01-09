export const removeAll = (
  previousValue: string,
  currentValue: string,
  operationSign: string,
): removeAll => {
  previousValue = "";
  currentValue = "";
  operationSign = undefined;

  return { previousValue, currentValue, operationSign };
};
