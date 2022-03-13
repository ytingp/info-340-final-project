import { NavLink } from 'react-router-dom';

export default function Nav(props) {
  console.log(props)
  return (
    <ul>
      {props.user && <>
        <li><NavLink to="/Groups">GROUPS</NavLink></li> 
        <li className="flow-right"><NavLink to="/Profile">PROFILE</NavLink></li>
        </>
      }
    </ul>
  );
}