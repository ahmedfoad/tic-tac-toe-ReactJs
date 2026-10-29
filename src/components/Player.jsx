import { useRef, useState } from "react";

export function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault(); // stop page reload; required validation already ran

    if (isEditing) {
      setPlayerName(inputRef.current.value.trim());
    }
    setIsEditing((prev) => !prev);
  }

  const playerNameElement = isEditing ? (
    <input
      ref={inputRef}
      type="text"
      required
      onInvalid={handleInvalid}
      onInput={handleInput}
      defaultValue={playerName}
    />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li className={isActive ? "active" : ""}>
      <form onSubmit={handleSubmit}>
        <span className="player">
          {playerNameElement}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button type="submit">{isEditing ? "Save" : "Edit"}</button>
      </form>
    </li>
  );

  function handleInvalid(e) {
    e.target.setCustomValidity("Please enter a player name.");
  }

  function handleInput(e) {
    e.target.setCustomValidity(""); // clear so it revalidates as the user types
  }
}
