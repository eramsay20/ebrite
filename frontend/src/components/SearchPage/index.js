import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getEvents, getFavorites } from '../../store/events';
import DisplayEvents from '../DisplayEvents'

function SearchPage(){
  const dispatch = useDispatch();

  // load all events into events state
  useEffect(()=>{
    dispatch(getEvents())
    dispatch(getFavorites())
  }, [dispatch])

  // pull out list of events from state
  const sessionUser = useSelector(state => state.session.user);
  const favorites = useSelector(state => state.events.favorites);
  const searchResults = useSelector(state => state.events.searchResults);

  let display;
  if(searchResults.length > 0){
    display = (<DisplayEvents favorites={favorites} user={sessionUser} events={searchResults}/>)
  } else {
    display = (<h1 style={{ display: 'flex', marginLeft: '40px', marginTop: '40px', color: 'var(--orange)' }}> No events found. </h1>)
  }

  // pass categories and events to children components
  return (
    <div className='body'>
      <h3 style={{ display: 'flex', marginLeft: '40px', marginTop: '40px'}}>{`Search query returned ${searchResults.length} results below:`}</h3>
      {display}
    </div>
  );
}

export default SearchPage;
