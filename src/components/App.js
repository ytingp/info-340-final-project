import GamePage from './GamePage';
import ProfilePage from './ProfilePage';
import ProfileForm from './ProfileForm';
import ProfileInfo from '../data/profileInfo.json';
import SignIn from './SignInPage';
import Nav from './Nav'
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, onValue} from 'firebase/database';

function App(props) {
  const navigateTo = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [info, setInfo] = useState(ProfileInfo);

  // authencation 
  useEffect(() => {
    const auth = getAuth();
    const authOffFcuntion = onAuthStateChanged(auth, (firebaseUser) => {
      if(firebaseUser) {
        setCurrentUser(firebaseUser);
      } else {  
      setCurrentUser(null);
      }
    })
  })

  // getting profile info from firebase
  const db = getDatabase();
  useEffect(() => {
    const dataRef = ref(db, "ProfileInfo");
    const offFunction = onValue(dataRef, (snapshot) => {
      const newValue = snapshot.val();
      setInfo(newValue)
    })
    
    function cleanup() {
      offFunction();
    }
    return cleanup;
  }, [])

  // 
  const changeInfo = function(about, want, curr, played) {
      const dataRef = ref(db, "ProfileInfo");
      console.log(played)
      const newInfo =  {
          "name": currentUser, 
          "about": about,
          "currGames": curr,
          "wantGames": want,
          "finishedGames": played,
          "img" : "img/profilepic.png"
      }

    firebaseSet(dataRef, newInfo);
    const newInfoArray = [newInfo];
    setInfo(newInfoArray);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout user={currentUser} />} >
          <Route index element={ <SignIn /> } />
            <Route element={ <ProtectedPage user={currentUser} />} >
              <Route path="/Groups" element={ <GamePage groups={props.groups}/> } />
              <Route path="/ProfileForm" element={ <ProfileForm info={info} user={currentUser} howToChangeInfo={changeInfo}/> } /> 
              <Route path="/Profile" element={ <ProfilePage info={info} user={currentUser} /> } /> 
            </Route> 
          </Route>
        </Routes>
    </>
  )
}

function ProtectedPage(props) {
  if(!props.user) {
    return <Navigate to="/Home" />
  } else {
    return <Outlet />
  }
    
}

function AppLayout({ user }) {
  return (
    <>
    <nav>
      <Nav user={user} />
    </nav>
      <Outlet />
    </>
  )
}
export default App;
