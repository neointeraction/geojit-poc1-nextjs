import React from 'react';
import './input.css';

interface InputProps {
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  className,
  label,
}) => {
  return (
    <>
      {label && <label className="dropdown-label">{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`custom-input ${className}`}
      />
    </>
  );
};

export default Input;
