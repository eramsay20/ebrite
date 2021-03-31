import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks; // declare variable to store which links to render

  if (sessionUser) { // if logged in, only show Profile button
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else { // else, render login & signup links instead
    sessionLinks = (
      <>
        <NavLink className="nav-link" to="/login" style={{ marginLeft: '.5rem' }}> Log In</NavLink>
        <NavLink className="nav-link" to="/signup" style={{ marginLeft: '.5rem' }}> Sign Up</NavLink>
      </>
    );
  }

  return (
    <>
        <NavLink exact to="/">
          <img style={{width: '70px'}} src="https://github.com/eramsay20/ebrite/blob/master/wiki-resources/ebrite_logo_trans.png?raw=true"></img>
        </NavLink>
        <input type='text'>ADD</input>
        {isLoaded && sessionLinks}
    </>
  );
}

export default Navigation;
