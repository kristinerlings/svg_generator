import { useState } from 'react';
import './App.css';
import Settings from './components/Settings';
import SvgDrawing from './components/SvgDrawing';
import { useLoaderData } from 'react-router-dom';
import { addGallery, getGalleries } from './galleryCommunicator';


export async function action({ request, params }) {
  let formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log('updates', updates);
  await addGallery(params.blobId, updates);
  return redirect(`/svg_generator/gallery/${params.blobId}`);
}

function App() {
  const [animation, setAnimation] = useState('0deg');
  const [distortionParameter, setDistortionParameter] = useState(0);
  const artBlob = useLoaderData();
  console.log(artBlob);

  const [randomX, setRandomX] = useState(Math.round(Math.random() * 200));
  const [randomY, setRandomY] = useState(Math.round(Math.random() * 200));

  const [style, setStyle] = useState('Solid');

  //Default value for reset button - random pos
  const setRandomPos = () => {
    setRandomX(Math.round(Math.random() * 200));
    setRandomY(Math.round(Math.random() * 200));
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
          setDistortionParameter={setDistortionParameter}
          setStyle={setStyle}
          style={style}
          distortionParameter={distortionParameter}
          randomX={randomX}
          randomY={randomY}
          animation={animation}
          artBlob={artBlob}
        />
      </div>
    </div>
  );
}

export default App;
