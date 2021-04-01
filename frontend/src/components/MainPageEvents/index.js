import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { dateFormat } from '../Utils/'

function MainPageEvents({ categories, events }){

  const [category, setCategory] = useState('Free')
  const eventsByCategory = events.filter(event => event.Category.category === category)

  return (
    <>
      <h2 style={{display: 'flex', justifyContent: 'flex-start', paddingLeft: '30px', fontWeight: '500px'}}> Popular in <span style={{paddingRight: '10px'}}></span><span style={{color: 'var(--blue)', borderBottom: '2px solid var(--shadow)', paddingRight: '10px', paddingLeft: '10px' }}>{category}</span> </h2>
      <div style={{justifyContent: 'flex-start', paddingLeft: '30px'}} className={`category-bar flex-container`}>
          {categories &&
          categories.map(category => (
            <div key={category} style={{paddingRight: '30px'}}>
              <h3 style={{paddingLeft: '0px'}} className="category" key={category} onClick={() => setCategory(category)}>{category}</h3>
            </div>
          ))}
        </div>
      <div className={`event-card-container flex-container`}>
        { events &&
        eventsByCategory.map(event => {
          const time = dateFormat(event.time);
          return (
          <div key={event.id} className={`event-card`}>
            <NavLink className="card-nav-link" to={`/events/${event.id}`}>
              <div className={`event-card-image-container`}>
                <img alt={'event'} className={`event-card-image`} src={event.image}></img>
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
