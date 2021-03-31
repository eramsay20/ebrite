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
      <h2 style={{display: 'flex', justifyContent: 'flex-start', paddingLeft: '30px', fontWeight: '500px'}}> Popular in <span style={{paddingRight: '10px'}}></span><span style={{color: 'var(--blue)', borderBottom: '2px solid var(--shadow)', paddingRight: '10px', paddingLeft: '10px' }}>{category}</span> </h2>
      <div style={{justifyContent: 'flex-start', paddingLeft: '30px'}} className={`category-bar flex-container`}>
          {categories &&
          categories.map(category => (
            <>
              <h3 style={{paddingLeft: '0px'}} className="category" key={category} onClick={() => setCategory(category)}>{category}</h3>
              <span style={{paddingRight: '30px'}}></span>
            </>
          ))}
        </div>
      <div className={`event-card-container flex-container`}>
        { events &&
        eventsByCategory.map(event => (
          <div className={`event-card`}>
            <NavLink className="card-nav-link" key={event.id} to={`/events/${event.id}`}>
              <div className={`event-image`}>
                <img src={event.image}></img>
              </div>
              <div>
                <p className={`event-card-title`}>{event.title}</p>
                <p>{event.time}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainPageEvents;
