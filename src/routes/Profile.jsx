import React, { useState } from 'react';
import './profile.css';

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
    <div className="profile__container">
      <section className="container__user">
        <h2 className="hidden">Profile</h2>
        <div className="user__info">
          <h3>UserNameHere</h3>
          <img className="img__profile" src="https://eu.ui-avatars.com/api/?name=John+Doe&size=250" />
        </div>
        <ul className="user__details">
          <li><span className="bold">Member since:</span> 01/01/01</li>
          <li><span className="bold">Number of saved artworks:</span> 5</li>
          <li><span className="bold">Number of liked artworks:</span> 52</li>
        </ul>
      </section>
      <section className="container__collection">
        <h2 className="hidden">Collection</h2>
        <button onClick={(e) => setActive('personal')}>Personal</button>
        <button onClick={(e) => setActive('collections')}>Collections</button>
        <button onClick={(e) => setActive('appreciations')}>
          Appreciations
        </button>
        <hr />
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
