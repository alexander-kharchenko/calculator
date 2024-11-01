import React from "react";
import "./DigitButton.scss";
import { ACTIONS } from "../../helpers/constants";

function DigitButton({ dispatch, digit }) {
  const onClick = () => {
    dispatch({
      type: ACTIONS.ADD_DIGIT,
      payload: { digit },
    });
  };

  return (
    <button className="digit-button" onClick={onClick}>
      {digit}
    </button>
  );
}

export default DigitButton;
