import React from "react";

const ScoreBoard = ({ score, otherScore }) => {
  return (
    <div className="score-display">
      {score} : {otherScore}
    </div>
  );
};

export default ScoreBoard;
