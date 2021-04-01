import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../store/events'

function MainPageEvents({ categories, events }){

  const [category, setCategory] = useState('Free')

  const eventsByCategory = events.filter(event => event.Category.category === category)

  const dateFormat = (dateString) => {
    const dateObj = new Date(dateString)
    const day = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString()
    return `${day}, ${time}`
  }

  return (
    <>
      <h2 style={{display: 'flex', justifyContent: 'flex-start', paddingLeft: '30px', fontWeight: '500px'}}> Popular in <span style={{paddingRight: '10px'}}></span><span style={{color: 'var(--blue)', borderBottom: '2px solid var(--shadow)', paddingRight: '10px', paddingLeft: '10px' }}>{category}</span> </h2>
      <div style={{justifyContent: 'flex-start', paddingLeft: '30px'}} className={`category-bar flex-container`}>
          {categories &&
          categories.map(category => (
            <>
              <h3 style={{paddingLeft: '0px'}} className="category" key={category} onClick={() => setCategory(category)}>{category}</h3>
              <span key={`${category}-span`} style={{paddingRight: '30px'}}></span>
            </>
          ))}
        </div>
      <div className={`event-card-container flex-container`}>
        { events &&
        eventsByCategory.map(event => {
          const time = dateFormat(event.time);
          return (
          <div className={`event-card`}>
            <NavLink className="card-nav-link" key={event.id} to={`/events/${event.id}`}>
              <div className={`event-card-image-container`}>
                <img className={`event-card-image`} src={event.image}></img>
              </div>
              <div>
                <p className={`event-card-title`}>{event.title}</p>
                <p>{time}</p>
              </div>
            </NavLink>
          </div>
          )
        })}
      </div>
    </>
  );
}

export default MainPageEvents;
