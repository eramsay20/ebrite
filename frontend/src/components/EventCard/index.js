import React from 'react';
import { NavLink } from 'react-router-dom';

function EventCard({ event, time }){
  return (
    <div key={event.id} className={`event-card`}>
      <NavLink className="card-nav-link" to={`/events/${event.id}`}>
        <div className={`event-card-image-container`}>
          <img alt={'event'} className={`event-card-image`} src={event.image}></img>
        </div>
        <div>
          <p className={`event-card-title`}>{event.title}</p>
          <p>{time}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default EventCard;
