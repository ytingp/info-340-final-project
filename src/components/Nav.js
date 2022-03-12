import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="">GROUPS</Link></li>
      <li className="flow-right"><Link to="/Profile">PROFILE</Link></li>
    </ul>
  );
}