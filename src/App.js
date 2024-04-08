import HandButton from "./components/HandButton";
import Button from "./components/Button";
import HandIcon from "./components/HandIcon";
import { useState } from "react";
import { compareHand, generateRandomHand } from "./components/utils";
import "./App.css";

const checkWinner = (me, other) => {
  const gameWinner = compareHand(me, other);
  return gameWinner > 0 ? "승리" : gameWinner < 0 ? "패배" : "무승부";
};

function App() {
  const [hand, setHand] = useState("rock");
  const [otherHand, setOtherHand] = useState("scissor");
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = checkWinner(nextHand, nextOtherHand);
    const gameWinner = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (gameWinner > 0) setScore(score + bet);
    if (gameWinner < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand("rock");
    setOtherHand("rock");
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    const num = Number(e.target.value);
    setBet(num);
  };

  return (
    <div className="App">
      <h1 className="title">가위바위보</h1>
      <Button onClick={handleClearClick} name="처음부터"></Button>
      <div>
        {score} : {otherScore}
      </div>
      <p>{checkWinner(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <div>
        <input
          type="number"
          value={bet}
          min={1}
          max={9}
          onChange={handleBetChange}
        ></input>
      </div>
      <div>승부기록:{gameHistory.join(", ")} </div>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
