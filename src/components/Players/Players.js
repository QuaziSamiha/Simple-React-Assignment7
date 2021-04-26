import React from 'react';
// fontAwesome is added for bonus marks
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
// css file is imported here
import './Players.css';

const Players = (props) => {
    // console.log(props);
    // console.log(props.player);

    // const player = props.player;
    // console.log(player);

    // object destructuring
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
                <button onClick={() => {props.selectedPlayer(props.player)}}> <FontAwesomeIcon icon={faClipboardCheck} /> Add to Team</button>
            </div>
            <div className="player-image">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Players;