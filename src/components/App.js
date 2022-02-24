import React, { useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import SearchBar from './SearchBar';
import GroupList from './Groups';

function App(props) {
  const [groups, setGroups] = useState(props.groups);
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
      </section>
    </>
  );
}

export default App;
