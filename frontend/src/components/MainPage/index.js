import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getEvents } from '../../store/events';
import MainPageEvents from '../MainPageEvents';
import MainPageBanner from '../MainPageBanner';
import './MainPage.css';

function MainPage(){
  const dispatch = useDispatch();

  // load all events into events state
  useEffect(()=>{
    dispatch(getEvents())
  }, [dispatch])

  // pull out list of events from state
  const events = useSelector(state => state.events.eventsList);

  // extract category names from events
  const categoryNames = events.map(e => e.Category.category)

  // simplify categoryNames into array of unique category names
  const categories = [];
  categoryNames.forEach(category => {
    if(!categories.includes(category)){
      categories.push(category);
    }
  })

  // pass categories and events to children components
  return (
    <>
      <MainPageBanner categories={categories} events={events}/>
      <MainPageEvents categories={categories} events={events}/>
    </>
  );
}

export default MainPage;
