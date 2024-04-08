import React from "react";
import { compareHand } from "./utils";
import styled from "styled-components";

export const checkWinner = (me, other) => {
  const gameWinner = compareHand(me, other);
  return gameWinner > 0 ? "승리" : gameWinner < 0 ? "패배" : "무승부";
};

const GameResult = ({ hand, otherHand }) => {
  return <ResultText>{checkWinner(hand, otherHand)}</ResultText>;
};

const ResultText = styled.p`
  margin: 10 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  text-shadow: 0 3px 0 #a875e9;
  letter-spacing: 0.19px;
  -webkit-text-stroke: 1px #fff;
`;
export default GameResult;
