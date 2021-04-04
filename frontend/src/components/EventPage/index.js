import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import EventPageHeader from '../EventPageHeader';
import EventPageBody from '../EventPageBody';

function EventPage(){
  const { eventId } = useParams()
  const event = useSelector(state => state.events[eventId]);

  return (
    <>
      <div className='event-grid-container'>
        <EventPageHeader event={event} />
        <EventPageBody event={event}/>
      </div>
    </>
  );
}

export default EventPage;
