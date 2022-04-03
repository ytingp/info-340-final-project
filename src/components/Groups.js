import { faEyeLowVision } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function GroupCard(props) {
  const [disable, setDisable] = React.useState(false);
  const [text, setText] = React.useState('Join');
  const [style, setstyle] = React.useState('');
  let users = props.group.users.map((user) => {
    return (<p className="user" key={user}>{user}</p>);
  });
  function handleClick() {
    if (disable) {
      props.unjoin(props.index);
      setDisable(false);
      setText('Join');
      setstyle('');
    } else {
      props.callback(props.index);
      setDisable(true);
      setText('Leave');
      setstyle('clicked');
    }

  }

  return (
    <>
      <div className="group">
        <div>
          <button className={style} onClick={handleClick}>{text}</button>
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
  let filteredData = props.groups.filter((group) => {
    if (props.term === '') {
      return group;
    }
    else {
      return group.game.toLowerCase().includes(props.term);
    }
  })
  let groupCards = filteredData.map((group, index) => {
    return <GroupCard key={group.game} group={group} index={index} callback={props.callback} unjoin={props.unjoin} />
  });
  return (
    <>
      {groupCards}
    </>
  );
}