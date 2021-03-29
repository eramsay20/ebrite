import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../store/events'

import './EventsDisplay.css';

function EventsDisplay(){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  useEffect(()=>{
    dispatch(getEvents())
  }, [])

  const events = useSelector(state => state.events.eventsList);
  console.log('>>>>>>>EVENTS: ', events)

  const [category, setCategory] = useState('')
  // todo: pull in category info somehow from state or db


  // todo: update categoryLinks to render NavLinks for every category
    const categoryLinks = (
      <>
        <NavLink className='nav__link' style={{ marginLeft: '.5rem' }} to="/category/:category">CATEGORY NAMES 1 HERE</NavLink>
        <NavLink className='nav__link' style={{ marginLeft: '.5rem' }} to="/category/:category">CATEGORY NAMES 2 HERE</NavLink>
      </>
    );

  return (
    <>
      <nav className="full-width-nav">
        <div className="nav__link-container">
          {categoryLinks}
        </div>
      </nav>
      <div>
        { events && events.map(event => (<p key={event.id} style={{ marginLeft: '.5rem' }}>{event.title}</p>))}

      </div>
    </>
  );
}

export default EventsDisplay;
