import React from "react";
import styled from "styled-components";

const ScoreBoard = ({ score, otherScore }) => {
  return (
    <ScoreBoards>
      <ScoreDisplay>
        <ScoreNum>{score}</ScoreNum>
        <ScoreName>나</ScoreName>
      </ScoreDisplay>
      <Versus>:</Versus>
      <ScoreDisplay>
        <ScoreNum>{otherScore}</ScoreNum>
        <ScoreName>상대</ScoreName>
      </ScoreDisplay>
    </ScoreBoards>
  );
};

const ScoreDisplay = styled.div`
  display: inline-block;
  min-width: 130px;
  height: 130px;
  padding: 28px 35px;
  border-radius: 27px;
  background-color: #6000db;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.07);
`;
const ScoreNum = styled.div`
  color: #fc0;
  font-weight: 700;
  font-size: 47px;
  line-height: 1;
  text-align: center;
  text-shadow: 0 3px 0 #af8d07;
`;

const ScoreName = styled.div`
  margin-top: 14px;
  color: #9680ff;
  font-weight: 700;
  font-size: 15px;
  font-family: GmarketSans;
  letter-spacing: -0.3px;
`;

const Versus = styled.div`
  margin: 0 7px;
  color: #fff;
  font-size: 64px;
`;

const ScoreBoards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ScoreBoard;
