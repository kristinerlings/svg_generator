import React from 'react'

/*create group radio btns: pass in as an array */

const Radio = ({text, changeHandler, name }) => {
  
  return (
    <>
      <label>
        <span>{text}</span>
        <input type="radio" name={name} onChange={changeHandler}/>
      </label>
    </>
  )
}

export default Radio;

/* Radio.propTypes = {
  name: PropTypes.string.isRequired
} */