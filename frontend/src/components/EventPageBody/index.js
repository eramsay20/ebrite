import React from 'react';

function EventPageBody({ event }){
  return (
    <>
      <div className='event-page-image'>
        <p>{event.summary}</p>
      </div>
      <div className='event-page-summary'>
        <h3>{event.time}</h3>
      </div>
    </>
  );
}

export default EventPageBody;
