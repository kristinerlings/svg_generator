import React, { useState } from 'react';
import Checkbox from './Checkbox';
import RadioGroup from './RadioGroup';

const Settings = () => {
  const [animation, setAnimation] = useState(false);

  const options = [
    { text: 'No Stroke', handler: () => console.log(false) },
    { text: 'Stroke', handler: () => console.log(true) },
    { text: 'Thin Stroke', handler: () => console.log('thin') },
  ];

  return (
    <div className="settings">
      <div>
        <p>Animation</p>
        <select name="aniimation">
          <option value="no-animation">No Animation</option>
          <option value="animation">Animation</option>
        </select>
      </div>
      <div>
        <p>Style</p>
        <RadioGroup options={options} />
      </div>
      <div>
        <p>Distortion</p>
        <input className='slider' type="range" min="1" max="100" />
      </div>
      <div className='resetContainer'>
        <button>Resset</button>
      </div>
    </div>
  );
};

export default Settings;
