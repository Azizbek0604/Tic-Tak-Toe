import { useState } from "react";

export default function Player({
  initilaName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditig] = useState(false);
  const [PlayerName, setPlayerName] = useState(initilaName);

  function handleEditClick() {
    setIsEditig((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let playerName = <span className="player-name">{PlayerName}</span>;

  if (isEditing) {
    playerName = (
      <input type="text" required value={PlayerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
