import React from 'react';
import { useSelector } from 'react-redux';

function ProfileSettings({username, email}){
  // const user = useSelector(state => state.session.user);
  return (
    <>
          <div className={`profile-image`}>
            <img alt={`img`} className={'event-card-image'} src={'https://github.com/eramsay20/ebrite/blob/master/wiki-resources/event-card-images/eventbrite_image.jpeg?raw=true'}></img>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px'}}>
            <h3>Welcome back, {username}!</h3>
            <div>
              <h4>Username: {username}</h4>
              <h4>Email: {email}</h4>
            </div>
          </div>
    </>
  );
}

export default ProfileSettings;
