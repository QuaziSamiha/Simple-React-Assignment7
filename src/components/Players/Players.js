import React from 'react';
import './Players.css';

const Players = (props) => {
    // console.log(props);
    // console.log(props.player);

    // const player = props.player;
    // console.log(player);

    const { name, age, email, city, img, salary } = props.player;
    return (
        <div className="player">
            {/* <h1>this is {player.name}</h1> */}
            <div className="player-info">
                <h3>Name: {name}</h3>
                <p>Age: {age}</p>
                <p>Email: <b>{email}</b></p>
                <p>City: {city}</p>
                <p>Salary: {salary}</p>
                <button>Add to Team</button>
            </div>
            <div className="player-image">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Players;