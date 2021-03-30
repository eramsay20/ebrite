import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer(){
  const WIKI_PATH='https://github.com/eramsay20/ebrite/wiki'
  const GITHUB_PROFILE_PATH='https://github.com/eramsay20'

  return (
    <nav>
      <div>
        <NavLink to={GITHUB_PROFILE_PATH} style={{ marginLeft: '.5rem' }}>Creator Github Profile</NavLink>
        <NavLink to={WIKI_PATH} style={{ marginLeft: '.5rem' }}>e.brite Wiki</NavLink>
      </div>
    </nav>
  );
}

export default Footer;
