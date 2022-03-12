import GamePage from './GamePage';
import ProfilePage from './ProfilePage'
import { Routes, Route } from 'react-router-dom'

function App(props) {
  return (
    <>
      <Routes>
        <Route index element={ <GamePage groups={props.groups}/> } />
        <Route path="/Profile" element={ <ProfilePage info={props.info}/> } /> 
      </Routes>
    </>
  );
}

export default App;
