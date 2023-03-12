import React from 'react'

const Radio = ({text, changeHandler, name, value, style }) => {
  return (
    <>
      <label className="radioElement">
        <input type="radio" name={name} checked={style === text} value={value} onChange={changeHandler} />
        <span>{text}</span>
      </label>
    </>
  );
}

export default Radio;
