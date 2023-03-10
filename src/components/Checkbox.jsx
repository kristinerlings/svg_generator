import React from 'react'

const Checkbox = ({id, name, value, labelText, changeHandler, checked}) => {
  return (
    <>
      <label htmlFor={id}>
        <span>{labelText}</span>
        <input type="checkbox" id={id} name={name} value={value} checked={checked} onChange={(e) => changeHandler(e.target.checked)}></input>
      </label>
    </>
  )
}

export default Checkbox