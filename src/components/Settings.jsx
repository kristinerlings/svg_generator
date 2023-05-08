import React, { useState } from 'react';
import DownloadButton from './DownloadButton';
import RadioGroup from './RadioGroup';
import Slider from './Slider';
import * as fetcher from 'react-router-dom';
import { addGallery } from './../galleryCommunicator.js';

import {
  Form,
  useFetcher,
  useLoaderData,
  redirect,
  useNavigate,
} from 'react-router-dom';

//action is the function that handles and sends all of the id's of the artwork and updates (object) of all of my values that i have.. it sends it to /GALLERYSERVICE) function that goes straight to craft.  . in
//

const Settings = ({
  distortionParameter,
  setDistortionParameter,
  setRandomPos,
  style,
  setStyle,
  setAnimation,
  randomX,
  randomY,
  animation,
}) => {
  const defaultParameter = 0;
  const options = [
    {
      text: 'Solid',
      handler: (e) => setStyle(e.target.value),
    },
    {
      text: 'Gradients',
      handler: (e) => setStyle(e.target.value),
    },
    {
      text: 'Pattern',
      handler: (e) => setStyle(e.target.value),
    },
  ];

  const reset = () => {
    setDistortionParameter(defaultParameter);
    setRandomPos();
    setStyle('Solid');
    setAnimation('0deg');
  };

  return (
    /*    <Form action="post" className="settings"> */
    <div className="settings">
      <div>
        <p>Rotation</p>
        <select name="animation" onChange={(e) => setAnimation(e.target.value)}>
          <option value="0deg">No rotation</option>
          <option value="45deg">45 Deg Rotate</option>
          <option value="-10deg">-10 Deg Rotate</option>
        </select>
      </div>
      <div>
        <p>Style</p>
        <RadioGroup style={style} options={options} />
      </div>
      <div>
        <Slider
          min={0}
          max={100}
          label={'Distortion'}
          value={distortionParameter}
          setValue={(newDistort) => setDistortionParameter(newDistort)}
          name="distortion"
        />
      </div>
      <div className="resetContainer">
        <button onClick={reset}>Reset</button>
        <Form method="post">
          <input
            onChange={() => console.log('cannot change animation')}
            type="text"
            name="animation"
            value={animation}
            /*  hidden */
          />
          <input
            onChange={() => console.log('cannot change randomx')}
            type="text"
            name="randomx"
            value={randomX}
            /*      hidden */
          />
          <input
            onChange={() => console.log('cannot change randomy')}
            type="text"
            name="randomy"
            value={randomY}
            /*          hidden */
          />
          <input
            onChange={() => console.log('cannot change distortion')}
            type="text"
            name="distortion"
            value={distortionParameter}
            /*     hidden */
          />
          <input
            onChange={() => console.log('cannot change style')}
            type="text"
            name="style"
            value={style}
            /*           hidden */
          />
          <button
            type="submit"
            style={{ marginLeft: '4rem', backgroundColor: 'skyblue' }}
          >
            Save
          </button>
        </Form>
        <DownloadButton />
      </div>
    </div>
    /*     </Form> */
  );
};

export default Settings;
