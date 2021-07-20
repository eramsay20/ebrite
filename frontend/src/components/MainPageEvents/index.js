import React, { useState } from 'react';
import DisplayEvents from '../DisplayEvents'

function MainPageEvents({ categories, events, user, favorites }){

  const [category, setCategory] = useState('Free')
  const eventsByCategory = events.filter(event => event.Category.category === category)

  return (
    <div className='events-container'>
      <h2 style={{display: 'flex', fontSize:'20px', justifyContent: 'flex-start', paddingLeft: '40px', fontWeight: '500px', margin: '0px', marginTop:'20px'}}> Popular in <span style={{paddingRight: '10px'}}></span><span style={{color: 'var(--blue)', borderBottom: '2px solid var(--shadow)', paddingRight: '5px', paddingLeft: '5px' }}>{category}</span> </h2>
      <div style={{justifyContent: 'flex-start', paddingLeft: '40px'}} className={`category-bar flex-container`}>
          { categories && categories.map(category => (
            <div key={category} style={{paddingRight: '30px'}}>
              <h3 className="category" onClick={() => setCategory(category)}>{category}</h3>
            </div>
          ))}
      </div>
      <DisplayEvents favorites={favorites} user={user} events={eventsByCategory}/>
    </div>
  );
}

export default MainPageEvents;
