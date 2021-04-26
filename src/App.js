import { useEffect, useState } from 'react';
import './App.css';
import Players from './components/Players/Players';
import Team from './components/Team/Team';
import playersData from './PlayersData/PlayersData.json';

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


  const headingStyle = {
    backgroundColor: 'cadetblue',
    lineHeight: '80px',
    textAlign: 'center'
  }
  return (
    <div>
      <h1 style={headingStyle}>Select Player for Team Formation</h1>
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
