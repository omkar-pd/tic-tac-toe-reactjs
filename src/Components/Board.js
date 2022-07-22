import { useState, useEffect } from "react";
import Square from "./Square";
import "./Board.css";

const intialState = Array(9).fill(null);
const Board = (props) => {
  const [gameState, updateGameState] = useState(intialState);
  const [isXChance, updateIsXChance] = useState(true);

  const userClickHandler = (e) => {
    let index = e.target.attributes.rowIndex.value;
    let stateData = Array.from(gameState);
    if (stateData[index]) return;
    stateData[index] = isXChance ? "X" : "O";
    updateGameState(stateData);
    updateIsXChance(!isXChance);
  };

  const resetGame = () => {
    updateGameState(intialState);
    updateIsXChance(true);
  };
  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      alert(`Congratulations! ${winner} won the Game !`);
      setTimeout(() => {
        resetGame();
      }, 1000);
    }
    if (gameState.every((element) => element !== null)) {
      alert("Game Draw");
      setTimeout(() => {
        resetGame();
      }, 1000);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className="board">
      <div className="row-1">
        <Square
          className={`border`}
          rowIndex={0}
          state={gameState[0]}
          onClick={userClickHandler}
        ></Square>
        <Square
          className={`border`}
          rowIndex={1}
          state={gameState[1]}
          onClick={userClickHandler}
        ></Square>
        <Square
          className={`b-bottom`}
          rowIndex={2}
          state={gameState[2]}
          onClick={userClickHandler}
        ></Square>
      </div>
      <div className="row-2">
        <Square
          className={`border`}
          rowIndex={3}
          state={gameState[3]}
          onClick={userClickHandler}
        ></Square>
        <Square
          className={`border`}
          rowIndex={4}
          state={gameState[4]}
          onClick={userClickHandler}
        ></Square>
        <Square
          className={`b-bottom`}
          rowIndex={5}
          state={gameState[5]}
          onClick={userClickHandler}
        ></Square>
      </div>
      <div className="row-3">
        <Square
          className={`b-right`}
          rowIndex={6}
          state={gameState[6]}
          onClick={userClickHandler}
        ></Square>
        <Square
          className={`b-right`}
          rowIndex={7}
          state={gameState[7]}
          onClick={userClickHandler}
        ></Square>
        <Square
          state={gameState[8]}
          rowIndex={8}
          onClick={userClickHandler}
        ></Square>
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};
export default Board;
