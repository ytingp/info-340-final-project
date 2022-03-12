import React from 'react';
import { Link } from 'react-router-dom';

export function ProfileNav(props) {
    return(
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li className="flow-right"><a href="">EDIT</a></li>
            </ul>
        </nav>
    )
}

export default ProfileNav;