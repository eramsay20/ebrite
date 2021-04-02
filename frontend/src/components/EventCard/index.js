import React from 'react';
import { NavLink } from 'react-router-dom';

function EventCard({ event, time }){
  const FAV_ICON_LINK = `https://github.com/eramsay20/ebrite/blob/master/wiki-resources/favorite-icon.png?raw=true`
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
      <div className={`fav-icon`}>
        <img src={FAV_ICON_LINK}></img>
      </div>
    </div>
  );
}

export default EventCard;
