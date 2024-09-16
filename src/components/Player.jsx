import { useRef, useState } from "react"

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  const playerName = useRef('')


  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    console.log(enteredPlayerName);
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName === '' || null ? "unknown" : enteredPlayerName}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}

