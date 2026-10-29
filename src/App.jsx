import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { Player } from "./components/Player";
import GameOver from "./GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const intialBoardGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = intialBoardGame;
  let winner = null;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((prev) => (prev === "X" ? "O" : "X"));

    setGameTurns((preTurns) => {
      const currentPlayer = deriveActivePlayer(preTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...preTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <>
      <header>
        <img src="game-logo.png" alt="Game Logo" />
        <h1>React Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player name="player1" symbol="X" isActive={activePlayer === "X"} />
            <Player name="player2" symbol="O" isActive={activePlayer === "O"} />
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} />}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
      </main>
      <Log turns={gameTurns} />
    </>
  );
}

export default App;
