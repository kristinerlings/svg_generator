import { useState } from 'react';
import './App.css';
import Settings from './components/Settings';
import SvgDrawing from './components/SvgDrawing';

function App() {
  const [count, setCount] = useState(0);
  const [animation, setAnimation] = useState("0deg");
  const [distortionParameter, setDistortionParameter] = useState({
    distortion: 0,
  });
  //distortionParameter og setFitlerParams


  //need to access it in the svgDrawing component as well ->
  const [randomX, setRandomX] = useState(Math.round(Math.random() * 200));
  const [randomY, setRandomY] = useState(Math.round(Math.random() * 200));

  const [style, setStyle] = useState('Solid');

  //random position for reset button 
  const setRandomPos = () => {
    setRandomX(Math.round(Math.random() * 200));
    setRandomY(Math.round(Math.random() * 200));
  };

  return (
    <div className="app">
      <div className="container">
        <SvgDrawing animation={animation} style={style} randomY={randomY} randomX={randomX} parameter={distortionParameter} />
        <Settings
          setAnimation={setAnimation}
          setRandomPos={setRandomPos}
          parameter={distortionParameter}
          updateParameter={setDistortionParameter}
          style={style}
          setStyle={setStyle}
        />
      </div>
    </div>
  );
}

export default App;
