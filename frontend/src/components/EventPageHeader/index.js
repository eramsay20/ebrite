import React from 'react';

import RegistrationFormModal from '../RegistrationFormModal';
import { dateFormat } from '../Utils/'

function EventPageHeader({ event }){

  return (
    <>
      <div className={`event-image-container`}>
        <img alt={`eventpic`} className={`event-image-container`} src={event.image}></img>
      </div>
      <div className={`event-details-container`}>
        <div>
          <h2 style={{textDecoration: 'underline', textTransform: 'capitalize'}}>{event.title}</h2>
          <h4>Host: {event.host}</h4>
        </div>
        <div>
          <h4>Time: {dateFormat(event.time)}</h4>
          <h4>Price: ${event.ticketPrice}</h4>
        </div>
        <div>
          <RegistrationFormModal event={event}/>
         </div>
      </div>
    </>
  );
}

export default EventPageHeader;
