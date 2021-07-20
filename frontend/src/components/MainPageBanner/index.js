import React from 'react';
import './MainPageBanner.css';
import banner from '../../front-assets/banner1.png'

function MainPageBanner(){
  return (
      <div className='main-page-banner'>
          <img alt={'banner'} src={banner}></img>
      </div>
  );
}

export default MainPageBanner;
