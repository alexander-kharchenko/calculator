import React from "react";
import "./OperationButton.scss";
import { ACTIONS } from "../../helpers/constants";

function OperationButton({ dispatch, operation }) {
  const onClick = () => {
    dispatch({
      type: ACTIONS.CHOOSE_OPERATION,
      payload: { operation },
    });
  };

  return (
    <button className="operation-button" onClick={onClick}>
      {operation}
    </button>
  );
}

export default OperationButton;
