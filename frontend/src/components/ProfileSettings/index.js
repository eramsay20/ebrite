import React from 'react';


function ProfileSettings({ user }){

  return (
    <>
          <div className={`profile-image`}>
            <img alt={`img`} className={'event-card-image'} src={'https://github.com/eramsay20/ebrite/blob/master/wiki-resources/event-card-images/eventbrite_image.jpeg?raw=true'}></img>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px'}}>
            <h3>Welcome back, {user.username}!</h3>
            <div>
              <h4>Username: {user.username}</h4>
              <h4>Email: {user.email}</h4>
            </div>
            {/* <button> Update Settings</button> */}
          </div>
    </>
  );
}

export default ProfileSettings;
