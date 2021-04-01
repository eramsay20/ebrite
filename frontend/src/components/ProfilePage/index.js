import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileSettings from '../ProfileSettings';
import ProfileEvents from '../ProfileEvents';

function ProfilePage(){
  const registered = useSelector(state => state.events.registered);

  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
      <div className='event-grid-container'>
        <ProfileSettings user={sessionUser} />
        <ProfileEvents registered={registered} user={sessionUser}/>
      </div>
    </>
  );
}

export default ProfilePage;
