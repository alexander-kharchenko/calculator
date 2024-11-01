const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

export const formatOperand = (operand) => {
  if (operand === null) return;

  const [integer, decimal] = operand.split(".");

  if (decimal === null) {
    return INTEGER_FORMATTER.format(integer);
  }

  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
};

export const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const previous = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(previous) || isNaN(current)) return "";

  let result = "";

  switch (operation) {
    case "+": {
      result = previous + current;
      break;
    }

    case "-": {
      result = previous - current;
      break;
    }

    case "*": {
      result = previous * current;
      break;
    }

    case "÷": {
      result = previous / current;
      break;
    }
  }

  return result.toString();
};
