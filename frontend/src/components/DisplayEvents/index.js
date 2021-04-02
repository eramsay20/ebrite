import React from 'react';
import { dateFormat } from '../Utils/'
import EventCard from '../EventCard'

function DisplayEvents({ events, user }){

  return (
    <div className={`event-card-container`}>
        { events && events.map(event => {
          const time = dateFormat(event.time);
          return <EventCard user={user} event={event} time={time}/>
        })}
    </div>
  );
}

export default DisplayEvents;
