import React from "react";
import styled from "styled-components";
const GameHistory = ({ gameHistory }) => {
  return (
    <HistoryBoard>
      <HistoryText>승부기록</HistoryText>
      {gameHistory.join(", ")}
    </HistoryBoard>
  );
};

const HistoryBoard = styled.div`
  margin: 20px 40px 36px;
  padding: 30px 47px;
  border-radius: 19px;
  color: #625f63;
  background-color: #fff;
  box-shadow: 0 3px 8px 0 rgba(89, 72, 112, 0.44),
    0 5px 3px rgba(215, 189, 248, 0.65);
`;

const HistoryText = styled.h2`
  margin: 0;
  color: #6000db;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.24px;
`;
export default GameHistory;
