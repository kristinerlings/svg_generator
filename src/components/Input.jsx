import React from 'react';
//rafce

const Input = ({ type, placeholder, name, changeHandler, value }) => {
  return (
    <input
        style={{
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            fontWeight: 600,
            border: '2px solid grey'
        }}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={(e) => changeHandler(e.target.value)}
      value={value}
    /> 
  );
};

export default Input;
