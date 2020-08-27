import React from 'react';

const Button = props => (
  <>
    {
      props.sawi ?
        <button
          onClick={props.action}
          onMouseEnter={() => props.sawi('super title')}
        >
          {props.text}
        </button>
        :
        <button
          onClick={props.action}
        >
          {props.text}
        </button>
    }
  </>

);

export default Button;
