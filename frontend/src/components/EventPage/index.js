import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getEvents } from '../../store/events'

import EventPageHeader from '../EventPageHeader';
import EventPageBody from '../EventPageBody';


function EventPage(){
  const { eventId } = useParams() // grab event id from route that redirected to this event
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getEvents())
  }, [])

  const event = useSelector(state => state.events[eventId]);

  console.log(event);

  return (
    <>
      <h1>TEST</h1>
      <EventPageHeader event={event} />
      <EventPageBody event={event}/>
    </>
  );
}

export default EventPage;
