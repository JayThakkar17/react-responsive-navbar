import React from 'react';
import "./Button.css"

const STYLES = ['btn--primary', 'btn--secondary'];

const SIZES = ['btn--medium', 'btn--large'];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const btnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const btnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${btnStyle} ${btnSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
