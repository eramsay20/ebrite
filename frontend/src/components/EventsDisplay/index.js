import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../store/events'

function EventsDisplay(){
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getEvents())
  }, [dispatch])

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

  // const categoryClick = () => {

  // }

  return (
    <>
      <nav className="full-width-nav">
        <div className="nav__link-container">
          {categories && categories.map(category => (
            <NavLink key={category} className='nav__link' style={{ marginLeft: '.5rem' }} to={`/`}>{category}</NavLink>
            ))}
        </div>
      </nav>
      <div>
        { events && events.map(event => (<NavLink to={`/events/${event.id}`} key={event.id} style={{ marginLeft: '.5rem' }}>{event.title}</NavLink>))}

      </div>
    </>
  );
}

export default EventsDisplay;
