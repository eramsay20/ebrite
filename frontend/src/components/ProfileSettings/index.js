import React, { useState } from 'react';

function ProfileSettings({ user }){

  return (
    <>
      <div className={`profile-picture-container`}>
        <h2 style={{textDecoration: 'underline'}}>{user.username}</h2>
      </div>
      <div className={`profile-settings-container`}>
        <h2 style={{textDecoration: 'underline'}}>User Settings</h2>
      </div>
    </>
  );
}

export default ProfileSettings;
