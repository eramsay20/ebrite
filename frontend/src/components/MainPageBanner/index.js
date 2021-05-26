import React from 'react';
import './MainPageBanner.css';

function MainPageBanner(){
  const banner = require('../../front-assets/banner1.png')
  return (
      <div className='main-page-banner'>
      <img alt={'banner'} src={'https://github.com/eramsay20/ebrite/blob/master/wiki-resources/eBrite-banner-1.png?raw=true'}></img>
      </div>
  );
}

export default MainPageBanner;
