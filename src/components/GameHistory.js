// GameHistory.js
import React from "react";

const GameHistory = ({ gameHistory }) => {
  return <div className="game-history">승부기록:{gameHistory.join(", ")}</div>;
};

export default GameHistory;
