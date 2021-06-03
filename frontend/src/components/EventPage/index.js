import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import EventPageHeader from '../EventPageHeader';
import EventPageBody from '../EventPageBody';

function EventPage(){
  const { eventId } = useParams()
  const event = useSelector(state => state.events[eventId]);

  return (
    <div className='body'>
      <div className='event-page-container'>
        <EventPageHeader event={event} />
        <EventPageBody event={event}/>
      </div>
    </div>
  );
}

export default EventPage;
