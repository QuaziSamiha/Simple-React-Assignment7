import { useEffect, useState } from 'react';
import './App.css';
import Players from './components/Players/Players';

import playersData from './PlayersData/PlayersData.json';

function App() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    // console.log(playersData);
    setPlayers(playersData);
    // console.log(players);
  })
  return (
    <div>
      {
        players.map(playerInfo => <Players 
        player={playerInfo}
        key={playerInfo.id}
        >
        </Players>)
      }
    </div>
  );
}

export default App;
