import React from 'react';

function EventPageBody({ event }){
  return (
    <>
      <div className='event-summary'>
        <h2 className={`title`}>{event.title} Overview</h2>
        <p className={`content`}>{event.summary}</p>
      </div>
      <div className='event-summary'>
      </div>
    </>
  );
}

export default EventPageBody;
