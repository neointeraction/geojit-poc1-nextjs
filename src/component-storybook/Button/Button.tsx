import React from 'react';
import './button.css';

const Button = ({ type, onClick, ButtonText, isDisabled }: any) => {
  return (
    <div>
      <button className={`btn ${type}`} onClick={onClick} disabled={isDisabled}>
        {ButtonText}
      </button>
    </div>
  );
};

export default Button;
