import React from 'react';

function loopList(props) {
    gameList = props.gameList
    const games = gameList.map((game) => {
        <li key={game}>{game}</li>
    })

    return(
        <ul>{games}</ul>       
    )
}

export function ProfilePic(props) {
    currGames = props.currGames

    return(
        <div class="column">
            <div class="pic_user">
                <img class="profile" src={props.img} alt={props.img} />
                <h1> {props.name} </h1>
            </div>
            <div>
                <div class="about">
                    <h2> About </h2>
                    <p> {props.about}</p>
                </div>
                <div class="games">
                    <h2> Games I am currently playing </h2>
                    <loopList gameList={currGame} />
                </div>
                <div class="games">
                    <h2> Games I want to play </h2>
                    <loopList gameList={wantGames} />
                </div>
                <div class="games">
                    <h2> Games I finished </h2>
                    <loopList gameList={finishedGames} />
                </div>
            </div>
        </div>

    )
}