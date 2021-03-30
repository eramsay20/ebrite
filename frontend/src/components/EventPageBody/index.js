import React from 'react';

function EventPageBody({ event }){
  return (
    <>
      <div className='event-summary'>
        <p>{event.summary}</p>
      </div>
      <div className='event-summary'>
      </div>
    </>
  );
}

export default EventPageBody;
