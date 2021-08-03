import React from 'react';
import './InputBasic.css';

function InputBasic(props) {
  return (
    <>
      <input
        type="text"
        className={`inputBasic ${props.styleName}`}
        placeholder={`${props.placeholder}`}
      />
    </>
  );
}
export default InputBasic;
