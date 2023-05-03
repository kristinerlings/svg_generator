import { useState, useEffect } from 'react';
import './App.css';
import Settings from './components/Settings';
import SvgDrawing from './components/SvgDrawing';

function App() {
  const [animation, setAnimation] = useState('0deg');
  const [distortionParameter, setDistortionParameter] = useState({
    distortion: 0,
  });

  const [randomX, setRandomX] = useState(Math.round(Math.random() * 200));
  const [randomY, setRandomY] = useState(Math.round(Math.random() * 200));
  const [galleryBlob, setGalleryBlob] = useState([]);

  const [style, setStyle] = useState('Solid');


  //Default value for reset button - random pos
  const setRandomPos = () => {
    setRandomX(Math.round(Math.random() * 200));
    setRandomY(Math.round(Math.random() * 200));
  };


  const handleSave = () => {
    const newGalleryBlob = galleryBlob ? [...galleryBlob] : [];
    newGalleryBlob.push({
      randomX,
      randomY,
      animation,
      style,
      distortionParameter,
    });
    setGalleryBlob(newGalleryBlob);
    localStorage.setItem('galleryBlob', JSON.stringify(newGalleryBlob));
  };

  return (
    <div className="app">
      <h1 className="title">Blob Generator</h1>
      <div className="container">
        <SvgDrawing
          animation={animation}
          style={style}
          randomY={randomY}
          randomX={randomX}
          distortionParameter={distortionParameter}
        />
        <Settings
          setAnimation={setAnimation}
          setRandomPos={setRandomPos}
          parameter={distortionParameter}
          updateParameter={setDistortionParameter}
          style={style}
          setStyle={setStyle}
          handleSave={handleSave}
        />
      </div>
    </div>
  );
}

export default App;
