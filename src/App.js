import HandButton from "./components/HandButton";
import Button from "./components/Button";
import HandImg from "./components/HandImg";
import { useState } from "react";
import { compareHand, generateRandomHand } from "./components/utils";
import { checkWinner } from "./components/GameResult";
import ScoreBoard from "./components/ScoreBoard";
import GameResult from "./components/GameResult";
import GameHistory from "./components/GameHistory";
import Bet from "./components/Bet";
import styled from "styled-components";
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
      <Box>
        <GameBox>
          <HandContainer>
            <GameResult hand={hand} otherHand={otherHand} />
            <HandIconContainer>
              <HandBackground>
                <HandImg className="HandIcons" value={hand} />
              </HandBackground>
              <Versus>VS</Versus>
              <HandBackground>
                <HandImg className="HandIcons" value={otherHand} />
              </HandBackground>
            </HandIconContainer>
          </HandContainer>
          <Bet bet={bet} onBetChange={handleBetChange} />
          <GameHistory gameHistory={gameHistory} />
        </GameBox>
      </Box>
      <HandButton value="rock" onClick={handleButtonClick} />
      <HandButton value="scissor" onClick={handleButtonClick} />
      <HandButton value="paper" onClick={handleButtonClick} />
    </div>
  );
}

const GameBox = styled.div`
  width: 100%;
  max-width: 520px;
  border: 6px solid #6e08fc;
  box-shadow: inset 0 3px 8px 0 rgba(56, 15, 110, 0.44);
  border-radius: 35px;
  padding: 5px;
`;
const Box = styled.div`
  padding: 5px;
  box-shadow: 0 3px 8px 0 rgba(56, 15, 110, 0.44);
  border-radius: 35px;
  margin-top: 25px;
`;

const HandContainer = styled.div`
  display: inline-block;
  width: 207px;
  height: 207px;
  text-align: center;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  margin-bottom: 60px;
`;

const HandIconContainer = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0.87;
  width: 70px;
  height: 70px;
  margin: 70px auto 0;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Versus = styled.div`
  margin: 0 30px;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
`;

const HandBackground = styled.div``;
export default App;
