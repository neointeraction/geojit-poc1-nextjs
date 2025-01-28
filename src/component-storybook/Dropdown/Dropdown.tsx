import React, { useState } from 'react';
import './Dropdown.css';
import { SlArrowDown } from 'react-icons/sl';

interface DropdownProps {
  options: string[];
  placeholder?: string;
  onSelect: (option: string) => void;
  label?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'Select an option',
  onSelect,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      {label && <label className="input-label">{label}</label>}
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption || placeholder}</span>
        <SlArrowDown />
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
