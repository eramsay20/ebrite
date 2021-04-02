import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getRegistered, getFavorites } from '../../store/events';
import ProfileSettings from '../ProfileSettings';
import ProfileEvents from '../ProfileEvents';

function ProfilePage(){
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.events.favorites);
  const registered = useSelector(state => state.events.registered);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(()=> {
    dispatch(getRegistered())
    dispatch(getFavorites())
  }, [dispatch])


  return (
    <>
    { sessionUser && (
      <div className='profile-grid-container'>
        <div className='profile-settings-container'>
          <ProfileSettings user={sessionUser} />
        </div>
        <div className='profile-events-container'>
          <ProfileEvents registered={registered} favorites={favorites}/>
        </div>
      </div>
      )
    }
    { !sessionUser &&
    <Redirect to="/" />
    }
  </>
  );
}

export default ProfilePage;
