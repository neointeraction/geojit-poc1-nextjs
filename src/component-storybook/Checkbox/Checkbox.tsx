import React from 'react';
import './checkbox.css';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="custom-checkbox">
      <label className="custom-checkbox">
        <span className="label">{label}</span>
        <input
          type="checkbox"
          id="custom-checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkbox;
