import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import EventPage from "./components/EventPage";
import SearchPage from "./components/SearchPage";
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
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <div className={`app-grid-container`}>
              <Navigation isLoaded={isLoaded} />
              <MainPage />
              <Footer />
            </div>
          </Route>
           <Route exact path='/events/search'>
            <div className='body'>
              <SearchPage />
            </div>
          </Route>
          <Route path='/events/:eventId'>
            <div className={`app-grid-container`}>
              <Navigation isLoaded={isLoaded} />
              <EventPage />
              <Footer />
            </div>
          </Route>
          <Route path='/profile'>
            <div className='body'>
              <ProfilePage />
            </div>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
