type removeAll = {
  previousValue: string;
  currentValue: string;
  operationSign: string;
};

type makeCalculation = {
  newCurrentValue: number | string;
  operation: string;
};

export { removeAll, makeCalculation };
