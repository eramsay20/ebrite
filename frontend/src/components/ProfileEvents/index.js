import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { dateFormat } from '../Utils/'
import { unregisterEvent, unfavoriteEvent } from '../../store/events';

import DisplayUserEvents from '../DisplayUserEvents';

function ProfileEvents({ registered, favorites }){
  const dispatch = useDispatch();

  const unregister = (eventId) => {
      dispatch(unregisterEvent(eventId))
  }

  const unfavorite = (eventId) => {
      dispatch(unfavoriteEvent(eventId))
  }

  return (
    <>
        <div>
          <h2 style={{textDecoration: 'underline', margin: '0px', marginTop: '10px'}}>Registered Events</h2>
          <div className='user-events-container'>
            <DisplayUserEvents events={registered} remove={unregister}/>
          </div>
        </div>
        <div>
          <h2 style={{textDecoration: 'underline', margin: '0px', marginTop: '10px'}}>Favorite Events</h2>
          <div className='user-events-container'>
            <DisplayUserEvents events={favorites} remove={unfavorite}/>
          </div>
        </div>
    </>
  );
}

export default ProfileEvents;
