import React from 'react';

function EventPageHeader({ event }){
  return (
    <>
      <div className='event-page-image'>
        <img src={event.image}></img>
      </div>
      <div className='event-page-summary'>
        <h1>{event.title}</h1>
        <h2>{event.host}</h2>
        <h3>{event.ticketPrice}</h3>
        <h3>{event.time}</h3>
      </div>
    </>
  );
}

export default EventPageHeader;
