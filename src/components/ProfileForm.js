import React from 'react';
import { useState } from 'react';
import Nav from './Nav'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { update } from 'firebase/database';

function ProfileForm (props) {
    const user = props.user.displayName;
    const alert = props.alertMessage;

    const[about, setAbout] = useState("");
    const[want, setWant] = useState("");
    const[curr, setCurr] = useState("");
    const[played, setPlayed] = useState("");
    const [imageFile, setImageFile] = useState(undefined)
    
    let initialURL = '/img/null.png'
    if(props.user && props.user.photoURL) {
        initialURL = props.user.photoURL
    }

    const [imagePreviewUrl, setImagePreviewUrl] = useState(initialURL)
    
    //image uploading!
    const handleChange = (event) => {
        if(event.target.files.length > 0 && event.target.files[0]) {
            const imageFile = event.target.files[0]
            setImageFile(imageFile);
            setImagePreviewUrl(URL.createObjectURL(imageFile));
        }
    }
    
    const handleClick =  async (event) => {
        const storage = getStorage(); //get a reference to the storage
        const newImageRef = ref(storage, "img/"+props.user.uid+".png")
        await uploadBytes(newImageRef, imageFile) //upload to storage        
        const url = await getDownloadURL(newImageRef);

        updateProfile(props.user, {photoURL: url})

        props.howToChangeInfo(about, want, curr, played, url);
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
                <label htmlFor="imageUploadInput" className='upload'>CHOOSE PROFLIE PIC</label>
                <input type="file" name="image" id="imageUploadInput" onChange={handleChange}/>
            </nav>
            
            <div>
                <form className="column">
                    <div className="pic_user">
                        <img className="profile" src={imagePreviewUrl} alt="user avatar preview"/>
                        <h1> {user} </h1>
                    </div>
                    <div className="positionCenter">
                        <div className="formBox">
                            <label className='form'>About</label>
                            <div >
                                <textarea 
                                    className="inputBox"  placeholder="Tell us about yourself" rows="5" cols="50" onChange={handleAboutChange} value={about}
                                ></textarea>
                            </div>
                        </div>
                        <div className="formBox">
                            <label className='form'>Games I am currently playing</label>
                            <div >
                                <textarea className="inputBox" placeholder="Enter games" rows="5" cols="50" onChange={handleWantChange} value={want}
                                ></textarea>
                            </div>
                        </div>
                        <div className="formBox">
                            <label className='form'>Games I want to play</label>
                            <div>
                                <textarea className="inputBox" placeholder="Enter games" rows="5" cols="50" onChange={handleCurrChange} value={curr}
                                ></textarea>
                            </div>
                        </div>
                        <div className="formBox">
                            <label className='form'> Games I finished </label>
                            <div >
                                <textarea className="inputBox"  placeholder="Enter games" rows="5" cols="50" onChange={handlePlayedChange} value={played}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {alert &&
                <div className="alertMessage">
                    {alert}
                </div>
            }
            <div className="positionCenter"> 
                <button className="buttomPadding" type="submit" onClick={handleClick}>SAVE</button>
            </div>
      </>
    )
}

export default ProfileForm;
/*<button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button> */