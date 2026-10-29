export default function Log({ turns }) {
  return (
    <>
      <span>Logs:</span>
      <ol id="log">
        {turns.map((turn) => (
          <li key={`${turn.square.row}-${turn.square.col}`}>
            Player: {turn.player}, Position: [{turn.square.row}] [
            {turn.square.col}]
          </li>
        ))}
      </ol>
    </>
  );
}
