import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import SearchBar from './SearchBar';
import GroupList from './Groups';
import CreateGroup from './GroupCreator';

import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database'
import { cleanup } from '@testing-library/react';

function App(props) {

  const db = getDatabase();

  const [groups, setGroups] = useState(props.groups);

  useEffect(() => {
    const allGroupsRef = ref(db, "allGroups");

    const offFunction = onValue(allGroupsRef, (snapshot) => {
      const allGroupsObject = snapshot.val();
      const groupKeysArray = Object.keys(allGroupsObject);

      const allGroupsArray = groupKeysArray.map((keyString) => {
        const newGroup = allGroupsObject[keyString];
        return newGroup;
      });

      setGroups(allGroupsArray);
    })
    console.log(groups);

    function cleanup() {
      offFunction();
    }

    return cleanup;
  }, [])

  const addGroup = (newGroup) => {
    const allGroupsRef = ref(db, "allGroups");
    firebasePush(allGroupsRef, newGroup); //Add to array in database
  }


  return (
    <>
      <nav>
        <Nav />
      </nav>
      <header>
        <Header />
      </header>
      <div className="searchbar">
        <SearchBar />
      </div>
      <section className="groups">
        <GroupList groups={groups} />
        <CreateGroup addGroup={addGroup} />
      </section>
    </>
  );
}

export default App;
