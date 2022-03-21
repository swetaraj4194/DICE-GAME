import { useState } from "react";

export default function DiceGame() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const [roll1, setRoll1] = useState(null);
  const [roll2, setRoll2] = useState(null);

  const randomNumber = (playerNumber) => {
    const number = Math.floor(Math.random() * 6) + 1;

    if (playerNumber === 1) {
      setRoll1(number);
    } else {
      setRoll2(number);
    }
    // console.log("our number", number);
  };

  const [turnSatus, setTurnStatus] = useState(null);

  function compare_score(player_a, player_b) {
    if (player_a > player_b) {
      setTurnStatus("`Player 1 wins this turn`");
      setScore1(score1 + 1);
    } else {
      setTurnStatus("Player 2 wins this turn");
      setScore2(score2 + 1);
    }
    setRoll1(null);
    setRoll2(null);
  }

  return (
    <div>
      <div class="conatainer">
        <div>Player1: {score1}</div>
        <div>Player2: {score2}</div>
      </div>
      <div>
        <div>
          <div>
            <span>{roll1}</span>
          </div>
          <button
            type="button1"
            onClick={() => randomNumber(1)}
            disabled={roll1}
          >
            Roll
          </button>
        </div>
        <div>
          <div>
            <span>{roll2}</span>
          </div>
          <button
            type="button2"
            onClick={() => randomNumber(2)}
            disabled={roll2}
          >
            Roll
          </button>
        </div>
        <div>
          <div>{turnSatus}</div>

          <button onClick={() => compare_score(roll1, roll2)}>
            Compare Rolls
          </button>
        </div>
      </div>
    </div>
  );
}
