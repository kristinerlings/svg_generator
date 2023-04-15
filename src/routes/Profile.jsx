import React, { useState } from 'react';

function Profile() {
  const [active, setActive] = useState('personal');
  //check if active
  const isActive = (option) => {
    if (option === active) {
      return true;
    }
  };

  //display the active component depending on the state
  const displayActive = () => {
    if (isActive('personal')) {
      return <ImgPersonal />;
    } else if (isActive('collections')) {
      return <ImgAlbums />;
    } else if (isActive('appreciations')) {
      return <ImgAppreciations />;
    }
  };

  return (
    <div>
      <section className="container__user">
        <h2 className="hidden">Profile</h2>
        <div className="user__img">
          <h3>UserNameHere</h3>
          <img src="https://eu.ui-avatars.com/api/?name=John+Doe&size=250" />
        </div>
        <ul className="user__details">
          <li>Member since: 01/01/01</li>
          <li>Number of saved artworks: 5</li>
          <li>Number of liked artworks: 52</li>
        </ul>
      </section>
      <section className="container__collection">
        <h2 className="hidden">Collection</h2>
        <button onClick={(e) => setActive('personal')}>Personal</button>
        <button onClick={(e) => setActive('collections')}>Collections</button>
        <button onClick={(e) => setActive('appreciations')}>Appreciations</button>
        {displayActive()}
      </section>
    </div>
  );
}

export default Profile;

const ImgPersonal = () => {
  return <div>Personal Component</div>;
};

const ImgAlbums = () => {
  return <div>Collections Component</div>;
};

const ImgAppreciations = () => {
  return <div>Appreciations Component</div>;
};

//create reactive component to show the images (reuse in every component)

//create a component for albums and then re-use if clicked (same from above)
//create a logic for it-> if clicked on album, show the images of the album (+ backbutton?)a
