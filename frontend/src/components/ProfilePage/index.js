import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileSettings from '../ProfileSettings';
import ProfileEvents from '../ProfileEvents';

function ProfilePage(){
  const registered = useSelector(state => state.events.registered);

  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
      <div className='profile-grid-container'>
        <div className='profile-settings'>
          <ProfileSettings user={sessionUser} />
        </div>
        <div className='profile-events'>
          <ProfileEvents registered={registered} user={sessionUser}/>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
