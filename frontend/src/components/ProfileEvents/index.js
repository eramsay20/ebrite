import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dateFormat } from '../Utils/'

function ProfileEvents({ registered, user }){

  const registrations = registered.map(obj => obj.registeredEvent);
  const registeredEventIds = registrations.map(registration => registration.eventId)
  // need to make fetch for users registered events


  return (
    <>
      <div className={`profile-events`}>
          <div className={`registered-events-container`}>
            <h2 style={{textDecoration: 'underline'}}>Registered Events</h2>
            <h2 style={{textDecoration: 'underline'}}>Registered Events</h2>
            <div className={`event-card-container flex-container`}>
            TEST
            {/* { registered &&
            registered.map(event => {
              const time = dateFormat(event.time);
              return (
              <div className={`event-card`}>
                <NavLink className="card-nav-link" key={event.id} to={`/events/${event.id}`}>
                  <div className={`event-card-image-container`}>
                    <img className={`event-card-image`} src={event.image}></img>
                  </div>
                  <div>
                    <p className={`event-card-title`}>{event.title}</p>
                    <p>{time}</p>
                  </div>
                </NavLink>
              </div>
              )
            })} */}
          </div>
          </div>
          <div className={`favorite-events-container`}>
            <h2 style={{textDecoration: 'underline'}}>Favorite Events</h2>
            <h2 style={{textDecoration: 'underline'}}>Favorite Events</h2>
            TEST
          </div>
      </div>
    </>
  );
}

export default ProfileEvents;
