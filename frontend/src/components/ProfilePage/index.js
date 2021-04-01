import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getRegistered, getFavorites } from '../../store/events';
import ProfileSettings from '../ProfileSettings';
import ProfileEvents from '../ProfileEvents';

function ProfilePage(){
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getRegistered())
    dispatch(getFavorites())
  }, [dispatch])

  const favorites = useSelector(state => state.events.favorites);
  const registered = useSelector(state => state.events.registered);
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
      <div className='profile-grid-container'>
        <div className='profile-settings-container'>
          <ProfileSettings user={sessionUser} />
        </div>
        <div className='profile-events-container'>
          <ProfileEvents registered={registered} favorites={favorites}/>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
