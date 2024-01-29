type removeAllType = {
  previousValue: string;
  currentValue: string;
  operationSign: string;
};

type makeCalculationType = {
  newCurrentValue: number | string;
  operation: string;
};

export { removeAllType, makeCalculationType };
