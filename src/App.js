import { useEffect, useState } from 'react';
import './App.css';
import Players from './components/Players/Players';
import Team from './components/Team/Team';
import playersData from './PlayersData/PlayersData.json';
// adding bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [players, setPlayers] = useState([])
  useEffect(() => {
    // console.log(playersData);
    setPlayers(playersData);
    // console.log(players);
  })

  const [selectedPlayer, setTeam] = useState([])

  const handleSelectedPlayer = (player) => {
    // console.log('added');
    // console.log(player);
    const newPlayer = [...selectedPlayer, player]
    setTeam(newPlayer);
  }

  return (
    <div>
      <h1 className='heading-style'>Select Players for BD Cricket Team Formation</h1>
      <div className='players'>
        <div className="all-players">
          {
            players.map(playerInfo => <Players
              player={playerInfo}
              key={playerInfo.id}
              selectedPlayer={handleSelectedPlayer}
            >
            </Players>)
          }
        </div>
        <div className="selected-players">
          <Team team={selectedPlayer}></Team>
        </div>
      </div>
    </div>
  );
}

export default App;
