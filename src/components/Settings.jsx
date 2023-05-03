import React, { useState } from 'react';
import DownloadButton from './DownloadButton';
import RadioGroup from './RadioGroup';
import Slider from './Slider';

const Settings = ({
  parameter,
  updateParameter,
  setRandomPos,
  style,
  setStyle,
  setAnimation,
  handleSave,
}) => {
  const defaultParameter = {
    distortion: 0,
  };
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
    updateParameter(defaultParameter);
    setRandomPos();
    setStyle('Solid');
    setAnimation('0deg');
  };

  return (
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
          value={parameter.distortion}
          setValue={(newDistort) =>
            updateParameter((parameter) => ({
              ...parameter,
              distortion: newDistort,
            }))
          }
        />
      </div>
      <div className="resetContainer">
        <button onClick={reset}>Reset</button>
        <button
          onClick={handleSave}
          style={{ marginLeft: '4rem', backgroundColor: 'skyblue' }}
        >
          Save
        </button>
        <DownloadButton />
      </div>
    </div>
  );
};

export default Settings;
