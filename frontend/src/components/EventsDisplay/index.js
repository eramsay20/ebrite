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

  const [category, setCategory] = useState('')
  // todo: pull in category info somehow from state or db

  const categoryNames = events.map(e => e.Category.category)
  const categories = [];
  categoryNames.forEach(category => {
    if(!categories.includes(category)){
      categories.push(category);
    }
  })

  return (
    <>
      <nav className="full-width-nav">
        <div className="nav__link-container">
          {categories && categories.map(category => (
            <NavLink className='nav__link' style={{ marginLeft: '.5rem' }} to={`/category/${category}`}>{category}</NavLink>
            ))}
        </div>
      </nav>
      <div>
        { events && events.map(event => (<p key={event.id} style={{ marginLeft: '.5rem' }}>{event.title}</p>))}

      </div>
    </>
  );
}

export default EventsDisplay;
