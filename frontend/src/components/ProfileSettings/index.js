import React from 'react';


function ProfileSettings({ user }){

  return (
    <>
          <div>
            <img alt={`img`} className={'event-card-image'} src={'https://github.com/eramsay20/ebrite/blob/master/wiki-resources/event-card-images/eventbrite_image.jpeg?raw=true'}></img>
          </div>
          <div>
            <h2 style={{textDecoration: 'underline'}}>User Settings</h2>
            ADD USER SETTINGS FORM HERE
            <button> Update Settings</button>
          </div>
    </>
  );
}

export default ProfileSettings;
