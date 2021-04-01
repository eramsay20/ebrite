import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getRegistered, getFavorites } from '../../store/events';
import ProfileSettings from '../ProfileSettings';
import ProfileEvents from '../ProfileEvents';

function ProfilePage(){
  const dispatch = useDispatch();
  const registered = useSelector(state => state.events.registered);

  const sessionUser = useSelector(state => state.session.user);
  useEffect(()=> {
    dispatch(getRegistered())
    dispatch(getFavorites())
  }, [dispatch])
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
