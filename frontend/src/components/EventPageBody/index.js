import React from 'react';

function EventPageBody({ event }){
  return (
    <>
      <div className='event-summary'>
        <h2>{event.title} Overview</h2>
        <p>{event.summary}</p>
      </div>
      <div className='event-summary'>
      </div>
    </>
  );
}

export default EventPageBody;
