import React from 'react';

const UserInfoCollect = (props) => {
  return (
    <div className="container" onClick={props.handleHideResults}>
      <form onSubmit={props.handleFormSubmit}>
        <div className="row">
          <label>First Name:</label>
          <input type="text" name="firstName" value={props.firstName} onChange={props.handleFirstNameChange} />
        </div>
        <div className="row">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={props.lastName} onChange={props.handleLastNameChange} />
        </div>
        <div className="row">
          <label>Level:</label>
          <input type="text" name="level" value={props.level} onChange={props.handleLevelChange} />
        </div>
        <div className="row">
          <label>Bio:</label>
          <textarea name="textarea" value={props.bio} onChange={props.handleBioChange} />
        </div>
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default UserInfoCollect;