import React from 'react'
import Radio from './Radio';

const RadioGroup = ({options}) => {
  
  return (
    <div className='radioGroup'>
      {options.map((radioOption,i) => (
        <Radio
          text={radioOption.text}
          name="stroke"
          changeHandler={() => radioOption.handler()}
          key={i} //unique key  - always use a key when I map
        />
     ))}
    </div>
  )
}

export default RadioGroup