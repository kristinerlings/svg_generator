import React, { useState } from 'react';
import Checkbox from './Checkbox';
import RadioGroup from './RadioGroup';
import Slider from './Slider';

const Settings = ({ params, updateParams }) => {
  const [animation, setAnimation] = useState(false);
  const defaultParams = {
    animation: false,
    style: 'solid',
    distortion: 0,
  };
  const options = [
    {
      text: 'Solid',
      handler: () => updateParams((params) => ({ ...params, style: 'solid' })),
    },
    {
      text: 'Gradients',
      handler: () =>
        updateParams((params) => ({ ...params, style: 'gradient' })),
    },
    {
      text: 'Pattern',
      handler: () =>
        updateParams((params) => ({ ...params, style: 'pattern' })),
    },
  ];

  return (
    <div className="settings">
      <div>
        <p>Animation</p>
        <select name="animation">
          <option value="no-animation">No Animation</option>
          <option value="animation">Animation</option>
        </select>
      </div>
      <div>
        <p>Style</p>
        <RadioGroup options={options} />
      </div>
      <div>
        <Slider
          min={0}
          max={100}
          label={'Distortion'}
          value={params.distortion}
          setValue={(newDistort) =>
            updateParams((params) => ({ ...params, distortion: newDistort }))
          }
        />
      </div>
      <div className="resetContainer">
        <button
          onClick={(e) => {
            updateParams(defaultParams);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Settings;
