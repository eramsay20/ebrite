import React from 'react';

function EventPageHeader({ event }){
  return (
    <>
      <div className={`event-image`}>
        <img src={event.image}></img>
      </div>
      <div className={`event-details`}>
        <h2>{event.title}</h2>
        <h4>Host: {event.host}</h4>
        <h4>Time: {event.time}</h4>
        <h4>Price: ${event.ticketPrice}</h4>
      </div>
    </>
  );
}

export default EventPageHeader;
