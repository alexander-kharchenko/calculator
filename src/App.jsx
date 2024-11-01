import { useReducer } from "react";
import "./App.scss";
import DigitButton from "./components/DigitButton/DigitButton";
import OperationButton from "./components/OperationButton/OperationButton";
import { ACTIONS } from "./helpers/constants";
import { formatOperand } from "./helpers/functions";
import { reducer } from "./helpers/reducer";

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {},
  );

  const clearAll = () => {
    dispatch({ type: ACTIONS.CLEAR });
  };

  const deleteDigit = () => {
    dispatch({ type: ACTIONS.DELETE_DIGIT });
  };

  const evaluateResult = () => {
    dispatch({ type: ACTIONS.EVALUATE });
  };

  return (
    <div className="calculator">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(previousOperand)} {operation}
        </div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      <button className="wide-button" onClick={clearAll}>
        Clear
      </button>
      <button onClick={deleteDigit}>Del</button>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="wide-button" onClick={evaluateResult}>
        =
      </button>
    </div>
  );
}

export default App;
