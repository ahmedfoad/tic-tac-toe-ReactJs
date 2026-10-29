export default function GameOver({ winner, hasDraw }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {hasDraw ? <p>{winner} won!</p> : <p>It is a draw</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
