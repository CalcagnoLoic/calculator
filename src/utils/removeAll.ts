import { removeAllType } from "../types/type";

export const removeAll = (
  previousValue: string,
  currentValue: string,
  operationSign: string,
): removeAllType => {
  previousValue = "";
  currentValue = "";
  operationSign = undefined;

  return { previousValue, currentValue, operationSign };
};
