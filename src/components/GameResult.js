// GameResult.js
import React from "react";
import { compareHand } from "./utils";

export const checkWinner = (me, other) => {
  const gameWinner = compareHand(me, other);
  return gameWinner > 0 ? "승리" : gameWinner < 0 ? "패배" : "무승부";
};

const GameResult = ({ hand, otherHand }) => {
  return <p className="game-result">{checkWinner(hand, otherHand)}</p>;
};

export default GameResult;
