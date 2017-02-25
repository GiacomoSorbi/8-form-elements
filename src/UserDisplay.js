import React from 'react';

const UserDisplay = (props) => {
  return (
    <div className='container'>
      <div className='name'>
        <h1>{`${props.firstName} ${props.lastName}`}</h1>
        <h2>Level: {props.level}</h2>
      </div>
      <div className='bio'>
        <h2>Bio:</h2>
        <p>{props.bio}</p>
      </div>
    </div>
  );
}

export default UserDisplay;