import React from 'react';
function GroupCard(props) {
  let users = props.group.users.map((user) => {
    return (<p className="user" key={user}>{user}</p>);
  });
  return (
    <>
      <div className="group">
        <div>
          <button>Join</button>
          <p>{props.group.time}</p>
          <p>{props.group.platform}</p>
          <p>{props.group.playerCount + " / " + props.group.max}</p>
        </div>
        <div>
          <h2>{props.group.game}</h2>
          <p className="message">{props.group.message}.</p>
          {users}
        </div>
      </div>
    </>
  );
}

export default function GroupList(props) {
  let groupCards = props.groups.map((group) => {
    return <GroupCard key={group.game} group={group} />
  });
  return (
    <>
      {groupCards}
    </>
  );
}