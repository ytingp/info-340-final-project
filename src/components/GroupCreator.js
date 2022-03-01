'use strict';
import React, { useState } from 'react';

export default function CreateGroup(props) {

    const [gameName, setGame] = useState(null);
    const [message, setMessage] = useState(null);
    const [numPlayers, setNumPlayers] = useState(0);
    const [consoleName, setConsole] = useState(null);
    const [time, setTime] = useState(null);
    const [amPM, setAMPM] = useState(null);
    const [timeZone, setTimeZone] = useState(null);

    const newGroup = 
    {
        game: gameName,
        users: ["player123"],
        time: time + amPM + " " + timeZone,
        platform: consoleName,
        playerCount: 1,
        max: numPlayers,
        message: message
    };

    const addGame = (event) => {
        event.preventDefault();
        console.log(newGroup);
        if(gameName != null && message != null && numPlayers != null && consoleName != null && time != null && amPM != null && timeZone != null) {
            props.addGroup(newGroup);
            console.log("new group added");
        }
    }

    return (
        <div className="container">

            <div className="jumbotron">
                <h1>Add Your Own Game Room!</h1>
            </div>

            <form id="gamecreate" className="form">
                <div className="form-group row">
                    <label className="col-lg-1">Game Name</label>
                    <div className="col-lg-11">
                        <input className="form-control" placeholder="Enter the name of the game you would like to play" style={{width: "20rem"}} onChange={event => setGame(event.target.value)}></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-1">Message</label>
                    <div className="col-lg-11">
                        <input className="form-control" placeholder="Enter the message displayed on your room" style={{width: "20rem"}} onChange={event => setMessage(event.target.value)}></input>
                    </div>
                </div>
                    <div className="form-group row">
                    <label className="col-lg-1">Number of Players</label>
                    <div className="col-lg-11">
                        <input className="form-control" type='number' placeholder="Enter the number of players for your room" style={{width: "20rem"}} onChange={event => setNumPlayers(event.target.value)}></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="console-input" className="col-lg-1">Console</label>
                    <div className="col-lg-11">
                        <input className="form-control" placeholder="Enter the Console/Platform you are playing on" style={{width: "20rem"}} onChange={event => setConsole(event.target.value)}></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="time-input" className="col-lg-1">Time</label>
                    <div className="col-lg-11">
                        <input className="form-control" placeholder="Set Time (Ex. 12:30)" style={{width: "9rem"}} onChange={event => setTime(event.target.value)}></input>
                        <input className="form-control" placeholder="AM or PM" style={{width: "4rem"}} onChange={event => setAMPM(event.target.value)}></input>
                        <input className="form-control" placeholder="Set Time Zone" style={{width: "6rem"}} onChange={event => setTimeZone(event.target.value)}></input>
                    </div>
                </div>

                <p></p>

                <button type="submit" className="btn btn-primary" onClick={addGame}>Add Game!</button>
            </form>
            
        </div>
    );
}