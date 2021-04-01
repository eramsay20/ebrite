import React from 'react';
import { NavLink } from 'react-router-dom';
import { dateFormat } from '../Utils/'
import DisplayUserEvents from '../DisplayUserEvents';
function ProfileEvents({ registered, favorites }){

  return (
    <>
        <div>
          <h2 style={{textDecoration: 'underline', margin: '0px', marginTop: '10px'}}>Registered Events</h2>
          <div className='user-events-container'>
            <DisplayUserEvents events={registered}/>
          </div>
        </div>
          <h2 style={{textDecoration: 'underline', margin: '0px', marginTop: '10px'}}>Favorite Events</h2>
          <div className='user-events-container'>
            <DisplayUserEvents events={favorites}/>
          </div>
    </>
  );
}

export default ProfileEvents;
