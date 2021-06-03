import React from 'react';

import RegistrationFormModal from '../RegistrationFormModal';
import { dateFormat } from '../Utils/'

function EventPageHeader({ event }){

  return (
    <div className={`event-header-container`}>
      <div className={`event-image-container`}>
        <img alt={`eventpic`} className={`event-image`} src={event.image}></img>
      </div>
      <div className={`event-header-details`}>
        <div>
          <h2 style={{textDecoration: 'underline', textTransform: 'capitalize'}}>{event.title}</h2>
          <p>Host: {event.host}</p>
        </div>
        <div>
          <p className={`min-margin`}>Time: {dateFormat(event.time)}</p>
          <p className={`min-margin`}>Price: ${event.ticketPrice}</p>
        </div>
        <div className='event-register-button'>
          <RegistrationFormModal event={event}/>
         </div>
      </div>
    </div>
  );
}

export default EventPageHeader;
