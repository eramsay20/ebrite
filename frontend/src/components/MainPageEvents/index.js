import React, { useState } from 'react';
import DisplayEvents from '../DisplayEvents'

function MainPageEvents({ categories, events, user, favorites }){

  const [category, setCategory] = useState('Free')
  const eventsByCategory = events.filter(event => event.Category.category === category)

  return (
    <>
      <h2 style={{display: 'flex', justifyContent: 'flex-start', paddingLeft: '30px', fontWeight: '500px'}}> Popular in <span style={{paddingRight: '10px'}}></span><span style={{color: 'var(--blue)', borderBottom: '2px solid var(--shadow)', paddingRight: '10px', paddingLeft: '10px' }}>{category}</span> </h2>
      <div style={{justifyContent: 'flex-start', paddingLeft: '30px'}} className={`category-bar flex-container`}>
          { categories && categories.map(category => (
            <div key={category} style={{paddingRight: '30px'}}>
              <h3 className="category" onClick={() => setCategory(category)}>{category}</h3>
            </div>
          ))}
      </div>
      <DisplayEvents favorites={favorites} user={user} events={eventsByCategory}/>
    </>
  );
}

export default MainPageEvents;
