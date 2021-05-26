import React from 'react';
import './MainPageBanner.css';

function MainPageBanner(){
  const banner = require('../../front-assets/banner1.png')
  return (
      <div className='main-page-banner'>
        <img alt={'banner'} src={banner}></img>
      </div>
  );
}

export default MainPageBanner;
