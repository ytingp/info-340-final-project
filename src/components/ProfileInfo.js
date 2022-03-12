import React from 'react';

export function ProfileInfo(props) {
    let info = props.info
    info = info[0]
    console.log(info)
    let currGames = info.currGames.map((game) => {
       return (<li className="gameList" key={game}>{game}</li>)
    })

    let finishedGames = info.finishedGames.map((game) => {
        return (<li className="gameList" key={game}>{game}</li>)
     })

    let wantGames = info.wantGames.map((game) => {
        return (<li className="gameList" key={game}>{game}</li>)
     })


    return(
        <div className="column">
            <div className="pic_user">
                <img className="profile" src={info.img} alt={info.img} />
                <h1> {info.name} </h1>
            </div>
            <div>
                <div className="about">
                    <h2> About </h2>
                    <p> {info.about}</p>
                </div>
                <div className="games">
                    <h2> Games I am currently playing </h2>
                    {currGames}
                </div>
                <div className="games">
                    <h2> Games I want to play </h2>
                    {wantGames}
                </div>
                <div className="games">
                    <h2> Games I finished </h2>
                    {finishedGames}
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo;