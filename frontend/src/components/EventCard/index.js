import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { favoriteEvent, unfavoriteEvent } from '../../store/events';

function EventCard({ event, time, user, favorites }){
  const FAV_ICON_LINK = `https://github.com/eramsay20/ebrite/blob/master/wiki-resources/favorite-icon.png?raw=true`
  const FAV_ICON_LINK_SELECTED = 'https://github.com/eramsay20/ebrite/blob/master/wiki-resources/favorite-icon_peach.png?raw=true'

  const dispatch = useDispatch();
  const addFavorite = (eventId) => dispatch(favoriteEvent(eventId));
  const removeFavorite = (eventId) => dispatch(unfavoriteEvent(eventId));

  const displayFavoriteCb = () => {
      setFavorite(!favorite)
      addFavorite({id: event.id})
  }

   const revertFavoriteCb = () => {
      setFavorite(!favorite)
      removeFavorite(event.id)
  }

  const [favorite, setFavorite] = useState(false);

  let isFavorite;
  useEffect(() => {
    isFavorite = favorites.find(fav => fav.id.toString() === event.id.toString())
    if(isFavorite) setFavorite(true)
  }, [favorites])


  let favDisplay;
  if(favorite || isFavorite ){
    favDisplay = FAV_ICON_LINK_SELECTED;
  } else {
    favDisplay = FAV_ICON_LINK;
  }

  return (
    <div key={event.id} className={`event-card`}>
      <NavLink className="card-nav-link" to={`/events/${event.id}`}>
        <div className={`event-card-image-container`}>
          <img alt={'event'} className={`event-card-image`} src={event.image}></img>
        </div>
        <div className={`event-card-details`}>
          <p className={`event-card-title`}>{event.title}</p>
          <p>{time}</p>
        </div>
      </NavLink>
      {user && !favorite &&
        (<div onClick={displayFavoriteCb} className={`fav-icon`}>
          <img alt={`fav`} src={favDisplay}></img>
        </div>)
      }
      {user && favorite &&
        (<div onClick={revertFavoriteCb} className={`fav-icon`}>
          <img alt={`fav-selected`} src={favDisplay}></img>
        </div>)
      }
    </div>
  );
}

export default EventCard;
