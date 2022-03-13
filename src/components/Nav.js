import { NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'
export default function Nav(props) {
  const handleSignOut = (event) => {
    //sign out here
    signOut(getAuth());
  }

  return (
    <ul>
      {props.user && <>
        <li><NavLink to="/Groups">GROUPS</NavLink></li> 
        <li className="flow-right" onClick={handleSignOut}><a>SIGN OUT</a></li>
        <li className="flow-right"><NavLink to="/Profile">PROFILE</NavLink></li>
      </>} 
    </ul>
  );
}