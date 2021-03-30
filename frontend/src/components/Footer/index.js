import React from 'react';

function Footer(){
  const WIKI_PATH='https://github.com/eramsay20/ebrite/wiki'
  const GITHUB_PROFILE_PATH='https://github.com/eramsay20'

  return (
    <nav>
      <div>
        <a href={GITHUB_PROFILE_PATH} style={{ marginLeft: '.5rem' }}>Github Profile</a>
        <a href={WIKI_PATH} style={{ marginLeft: '.5rem' }}>e.brite Wiki</a>
      </div>
    </nav>
  );
}

export default Footer;
