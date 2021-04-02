import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import EventPage from "./components/EventPage";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";

import './index.css';

import * as sessionActions from './store/session';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=> {
    if(isLoaded === false) {
      dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }
  }, [dispatch, isLoaded])

  return (
    <>
        <div className={`app-grid-container`}>
          <div className={`header flex-container`}>
            <Navigation isLoaded={isLoaded} />
          </div>
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <div className='body'>
              <MainPage />
            </div>
          </Route>
          <Route path='/events/:eventId'>
            <div className='body'>
              <EventPage />
            </div>
          </Route>
          <Route path='/profile'>
            <div className='body'>
              <ProfilePage />
            </div>
          </Route>
        </Switch>
      )}
            <div className={`footer flex-container`}>
              <Footer />
            </div>
          </div>
    </>
  );
}

export default App;
