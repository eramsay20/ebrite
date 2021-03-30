import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import Navigation from "./components/Navigation";
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import MainPage from "./components/MainPage";
import EventPage from "./components/EventPage";
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
  }, [dispatch])

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
          <Route path='/login'>
            <div className='body'>
              <LoginFormPage />
            </div>
          </Route>
          <Route path='/signup'>
            <div className='body'>
              <SignupFormPage />
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
