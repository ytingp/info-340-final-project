import React, { useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import SearchBar from './SearchBar';
import GroupList from './Groups';
import CreateGroup from './GroupCreator';

function App(props) {
  const [groups, setGroups] = useState(props.groups);
  console.log(groups)

  const addGroup = (newGroup) => {
    let groupCopy = groups.push(newGroup)
    setGroups(groupCopy);
    console.log(groups);
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
        <CreateGroup addGroup={addGroup}/>
      </section>
    </>
  );
}

export default App;
