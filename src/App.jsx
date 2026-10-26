function App() {
  return (
    <>
      <header>
        <img src="game-logo.png" alt="Game Logo" />
        <h1>React Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players">
            <li>
              <span className="player-name">player1</span>
              <span className="player-symbol">x</span>
            </li>
            <li>
              <span className="player-name">player2</span>
              <span className="player-symbol">o</span>
            </li>
          </ol>
          BOARD
        </div>
      </main>
      LOG
    </>
  );
}

export default App;
