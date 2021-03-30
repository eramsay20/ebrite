import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../store/events'

function MainPageEvents({ categories, events }){

  const [category, setCategory] = useState('')
  // todo: pull in category info somehow from state or db

  return (
    <>
      <nav>
        <div>
          {categories &&
          categories.map(category => (
            <NavLink className="nav-link" key={category} to={`/`}>{category}</NavLink>
          ))}
        </div>
      </nav>
      <div>
        { events &&
        events.map(event => (
          <NavLink className="nav-link" key={event.id} to={`/events/${event.id}`}>{event.title}</NavLink>
        ))}
      </div>
    </>
  );
}

export default MainPageEvents;
