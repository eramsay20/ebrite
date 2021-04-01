import React from 'react';
import { NavLink } from 'react-router-dom';

function UserEventCard({ event, time, remove }){
  return (
    <>
      <div key={event.id} className={`user-event-card`}>
        <NavLink className="card-nav-link" to={`/events/${event.id}`}>
          <div className={`user-event-card-image-container`}>
            <img alt={'event'} className={`event-card-image`} src={event.image}></img>
          </div>
          <div>
            <p className={`event-card-title`}>{event.title}</p>
            <p>{time}</p>
          </div>
        </NavLink>
        <button onClick={() => {remove(event.id)}}>Remove</button>
      </div>
    </>
  );
}

export default UserEventCard;
