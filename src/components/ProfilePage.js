import React from 'react';
import { Link } from 'react-router-dom';
import ProfileInfo from './ProfileInfo'
import Nav from './Nav'


function ProfilePage(props) {
    const user = props.user
    props.setAlertMessage(null)
    console.log(props)
    return (
        <>
            <nav>
                <Nav />
                <li className='edit'> <Link to="/ProfileForm">EDIT</Link> </li>
            </nav> 
            <ProfileInfo info={props.info} user={user}/>
        </>
    )
}

export default ProfilePage;

