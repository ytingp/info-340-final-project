import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Nav from './Nav'

function ProfileForm (props) {
    console.log(props)
    let info = props.info
    console.log(info)
    
    const user = props.user.displayName
    console.log(user)
    const[about, setAbout] = useState("");
    const[want, setWant] = useState("");
    const[curr, setCurr] = useState("");
    const[played, setPlayed] = useState("");

    const handleClick = function(event) {
        console.log("clicked")
        props.howToChangeInfo(about, want, curr, played);
    }

    const handleAboutChange = function(event) {
        let inputValue = event.target.value;
        setAbout(inputValue)
    }

    const handleWantChange = function(event) {
        let inputValue = event.target.value;
        setWant(inputValue)
    }

    const handleCurrChange = function(event) {
        let inputValue = event.target.value;
        setCurr(inputValue)
    }

    const handlePlayedChange = function(event) {
        let inputValue = event.target.value;
        setPlayed(inputValue)
    }

    return (
        <>
            <nav>
                <Nav />
                <li className='edit'> <>CHOOSE PROFIE PIC</> </li>
            </nav>
            <div>
                <form className="column">
                    <div className="pic_user">
                        <img className="profile" src={info.img} alt={info.img} />
                        <h1> {user} </h1>
                    </div>
                    <div className="positionCenter">
                        <div className="formBox">
                            <label className='form'>About</label>
                            <div >
                                <textarea 
                                    className="inputBox" rows="5" cols="50" onChange={handleAboutChange} value={about}
                                ></textarea>
                            </div>
                        </div>
                        <div className="formBox">
                            <label className='form'>Games I am currently playing</label>
                            <div >
                                <textarea className="inputBox" rows="5" cols="50" onChange={handleWantChange} value={want}
                                ></textarea>
                            </div>
                        </div>
                        <div className="formBox">
                            <label className='form'>Games I want to play</label>
                            <div>
                                <textarea className="inputBox" rows="5" cols="50" onChange={handleCurrChange} value={curr}
                                ></textarea>
                            </div>
                        </div>
                        <div className="formBox">
                            <label className='form'> Games I finished </label>
                            <div >
                                <textarea className="inputBox" rows="5" cols="50" onChange={handlePlayedChange} value={played}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="positionCenter"> 
                <button className="buttomPadding" type="submit" onClick={handleClick}>SAVE</button>
            </div>
      </>
    )
}

export default ProfileForm;
