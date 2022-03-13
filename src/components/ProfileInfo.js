import React from 'react';

export function ProfileInfo(props) {
    console.log(props)
    let info = props.info
    const user = props.user.displayName
    console.log(user)
    if(info.length === 1) {
        info = info[0]
    }
    console.log(info)

    return(
        <div className="column">
            <div className="pic_user">
                <img className="profile" src='img/profilepic.png' alt='img/profilepic.png' />
                <h1> {user} </h1>
            </div>
            <div>
                <div className="about">
                    <h2> About </h2>
                    <p> {info.about}</p>
                </div>
                <div className="games">
                    <h2> Games I am currently playing </h2>
                    <p>{info.currGames}</p>
                </div>
                <div className="games">
                    <h2> Games I want to play </h2>
                    <p>{info.wantGames}</p>
                </div>
                <div className="games">
                    <h2> Games I finished </h2>
                    <p>{info.finishedGames}</p>
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo;