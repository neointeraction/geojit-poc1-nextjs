import React from 'react';
import './radio.css';

interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  checked,
  onChange,
  label,
}) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const radioId = `custom-radio-${name}-${value}`;

  return (
    <div>
      <label className="custom-radio">
        <span className="label">{label}</span>
        <input
          type="radio"
          id={radioId}
          name={name}
          value={value}
          checked={checked}
          onChange={handleRadioChange}
        />
        <span className="checkmark-radio"></span>
      </label>
    </div>
  );
};

export default RadioButton;
