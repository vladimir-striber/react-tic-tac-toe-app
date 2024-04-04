import { Player } from "./components/Player.jsx";
import { useState } from "react";

function App() {

  const [ playerOneName, setPlayerOneName ] = useState('Player 1');
  const [ playerTwoName, setPlayerTwoName ] = useState('Player 2');

  const handleOnNameSave = (id, name) => {
    if (id === 1) {
      setPlayerOneName(name);
    } else {
      setPlayerTwoName(name);
    }
  }

  return (
    <>
      <h1>React Tic-Tac-Toe</h1>
      <main>
        <div id='game-container'>
          <ol id='players'>
            <Player
              id={1}
              name={playerOneName}
              symbol='X'
              onNameSave={handleOnNameSave}
            />
            <Player
              id={2}
              name={playerTwoName}
              symbol='O'
              onNameSave={handleOnNameSave}
            />
          </ol>
        </div>
      </main>
    </>
  )
}

export default App;
