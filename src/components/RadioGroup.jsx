import React from 'react'
import Radio from './Radio';

const RadioGroup = ({options, style}) => {
  
  return (
    <div className='radioGroup'>
      {options.map((radioOption,i) => (
        <Radio
          style={style}
          text={radioOption.text}
          name="style"
          value={radioOption.text}
          changeHandler={(e) => radioOption.handler(e)}
          key={i} //unique key  - always use a key when I map
        />
     ))}
    </div>
  )
}

export default RadioGroup