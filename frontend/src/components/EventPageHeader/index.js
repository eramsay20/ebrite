import React, { useState } from 'react';

import RegistrationFormModal from '../RegistrationFormModal';

function EventPageHeader({ event }){

  return (
    <>
      <div className={`event-image-container`}>
        <img className={`event-image-container`} src={event.image}></img>
      </div>
      <div className={`event-details-container`}>
        <h2>{event.title}</h2>
        <h4>Host: {event.host}</h4>
        <h4>Time: {event.time}</h4>
        <h4>Price: ${event.ticketPrice}</h4>
        <RegistrationFormModal event={event}/>
      </div>
    </>
  );
}

export default EventPageHeader;
