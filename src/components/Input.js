import React from 'react';

function Input(props) {
  const {id, type, value} = props.item;
  const regexFirstL = /(^|\s)\S/g;
  let label = id.replace(/-/g," ").replace(regexFirstL, L=>L.toUpperCase());
  return (
    <label htmlFor={id}>{label}:
      <input type={type} id={id} onChange={(e) => {
        let inputValue = e.target.value;
        props.handleChange(id, inputValue);
        }}/>
    </label>
  )
}

export default Input;