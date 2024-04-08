// BetInput.js
import React from "react";

const BetInput = ({ bet, onBetChange }) => {
  return (
    <div className="bet-input">
      <input type="number" value={bet} min={1} max={9} onChange={onBetChange} />
    </div>
  );
};

export default BetInput;
