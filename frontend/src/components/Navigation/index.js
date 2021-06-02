import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormModal'
import SearchForm from '../SearchForm'
import * as sessionActions from '../../store/session';


function Navigation({ isLoaded }){
  const logo = "https://github.com/eramsay20/ebrite/blob/master/wiki-resources/ebrite_logo_trans.png?raw=true"
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  // log out button functionality
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  // declare variable to store which links to render
  let sessionLinks;
  if (sessionUser) { // if logged in, only show Profile button
    sessionLinks = (
      <>
        <img alt={`logo`} style={{width: '18px', marginRight: '-5px'}} src="https://github.com/eramsay20/ebrite/blob/master/wiki-resources/user-profile-icon.png?raw=true"></img>
       <NavLink className="nav-link" to="/profile" style={{ marginLeft: '.5rem' }}> Profile </NavLink>
       <NavLink onClick={logout} className="nav-link" to="/" style={{ marginLeft: '.5rem' }}>Log Out</NavLink>
      </>
    );
  } else { // else, render login & signup links instead
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <div className={`nav`}>  
        <div className={`nav-bar-logo`}>
            <NavLink exact to="/"> 
              <img alt={`logo`} className='logo' src={`${logo}`}></img> 
            </NavLink>
        </div>
        <div className={`nav-bar-search`}>
            <SearchForm />
        </div>
        <div className={`nav-bar-links`}>
            {isLoaded && sessionLinks}
        </div>
    </div>
  );
}

export default Navigation;
