import React from 'react';
// css file is imported
import './Team.css';

const Team = (props) => {
    // console.log(props);
    // console.log(props.team);

    const team = props.team;
    const totalBudget = team.reduce((total, player) => total + player.salary, 0)
    return (
        <div className="cricket-team">
            <h1>Team Information</h1>
            <p>Total Selected Players: {team.length}</p>
            <p>Selected Players: </p>
            <ul>
                {
                    team.map(player => <li>{player.name}</li>)
                }
            </ul>
            <h4>Total Budget: {totalBudget}tk</h4>
        </div>
    );
};

export default Team;