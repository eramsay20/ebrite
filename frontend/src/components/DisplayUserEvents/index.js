import React from 'react';
import { dateFormat } from '../Utils/'
import UserEventCard from '../UserEventCard'

function DisplayUserEvents({ events }){

  const remove = () => {

  }

  return (
    <div className={`user-event-card-container`}>
        { events && events.map(event => {
          const time = dateFormat(event.time);
          return <UserEventCard event={event} time={time}/>
        })}
    </div>
  );
}

export default DisplayUserEvents;
