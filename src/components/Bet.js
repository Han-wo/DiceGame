import React from "react";
import styled from "styled-components";

const BetInput = ({ bet, onBetChange }) => {
  return (
    <BetInputs>
      배점
      <BetInputBox
        type="number"
        value={bet}
        min={1}
        max={9}
        onChange={onBetChange}
      />
      배
    </BetInputs>
  );
};

const BetInputs = styled.div`
  margin-top: -15px;
  color: #fff;
  font-size: 17px;
`;
const BetInputBox = styled.input`
  width: 73px;
  margin: 0 9px;
  padding: 14px 10px;
  border: 2px solid #753cf7;
  border-radius: 10px;
  color: #fff;
  font-size: 17px;
  background-color: #6000db;
`;
export default BetInput;
