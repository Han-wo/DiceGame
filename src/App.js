import HandButton from "./components/HandButton";
import Button from "./components/Button";
import HandIcon from "./components/HandIcon";
import { useState } from "react";
import { compareHand, generateRandomHand } from "./components/utils";
import { checkWinner } from "./components/GameResult";
import ScoreBoard from "./components/ScoreBoard";
import GameResult from "./components/GameResult";
import GameHistory from "./components/GameHistory";
import Bet from "./components/Bet";
import "./App.css";

function App() {
  const [hand, setHand] = useState("rock");
  const [otherHand, setOtherHand] = useState("scissor");
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const gameWinner = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, checkWinner(nextHand, nextOtherHand)]);
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
      <Button onClick={handleClearClick} />
      <ScoreBoard score={score} otherScore={otherScore} />
      <GameResult hand={hand} otherHand={otherHand} />
      <div>
        <HandIcon value={hand} /> VS <HandIcon value={otherHand} />
      </div>
      <Bet bet={bet} onBetChange={handleBetChange} />
      <GameHistory gameHistory={gameHistory} />
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
