import React from 'react';
import { NavLink } from 'react-router-dom';
import { dateFormat } from '../Utils/'

function ProfileEvents({ registered, favorites }){

  return (
    <>
      <div className={`profile-events`}>
          <h2 style={{textDecoration: 'underline'}}>Registered Events</h2>
          <div className={`profile-events-container`}>
            { registered &&
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
            })}
          </div>
          <h2 style={{textDecoration: 'underline'}}>Favorite Events</h2>
          <div className={`favorites-events-container`}>
            { favorites &&
            favorites.map(event => {
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
            })}
          </div>
      </div>
    </>
  );
}

export default ProfileEvents;
