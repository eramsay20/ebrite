import React from 'react';

function EventPageBody({ event }){
  return (
    <>
      <div className='event-summary'>
        <h2 style={{textDecoration: 'underline'}}>Event Overview</h2>
        <p style={{textAlign: 'justify'}}>{event.summary}</p>
      </div>
      <div className='event-summary'>
      </div>
    </>
  );
}

export default EventPageBody;
