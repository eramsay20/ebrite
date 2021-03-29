import React from 'react';

import EventsDisplay from '../EventsDisplay'
import WelcomeBanner from '../WelcomeBanner'

import './MainPage.css';

function MainPage(){

  return (
    <>
      <WelcomeBanner />
      <EventsDisplay />
    </>
  );
}

export default MainPage;
