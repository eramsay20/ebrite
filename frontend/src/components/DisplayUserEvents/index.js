import React from 'react';
import { dateFormat } from '../Utils/'
import UserEventCard from '../UserEventCard'

function DisplayUserEvents({ events, remove }){

  return (
    <div className={`user-event-card-container`}>
        { events && events.map(event => {
          const time = dateFormat(event.time);
          return <UserEventCard key={event.id} event={event} time={time} remove={remove}/>
        })}
    </div>
  );
}

export default DisplayUserEvents;
