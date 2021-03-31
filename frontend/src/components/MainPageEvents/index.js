import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../store/events'

function MainPageEvents({ categories, events }){

  const [category, setCategory] = useState('Free')

  useEffect(()=>{
    console.log('selected category', category)
  }, [category])

  const eventsByCategory = events.filter(event => event.Category.category === category)

  return (
    <>
      <div className={`category-bar flex-container`}>
            <h3>Event Categories</h3>
          {categories &&
          categories.map(category => (
            <h3 className="category" key={category} to={`/`} onClick={() => setCategory(category)}>{category}</h3>
          ))}
        </div>
      <div className={`event-card-container flex-container`}>
        { events &&
        eventsByCategory.map(event => (
          <div className={`event-card flex-vertical`}>
            <NavLink className="nav-link" key={event.id} to={`/events/${event.id}`}>{event.title}</NavLink>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainPageEvents;
