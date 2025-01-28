import React from 'react';
import './textarea.css';

interface TextareaProps {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  className?: string;
  label?: string;
  rows?: number;
  cols?: number;
}

const Textarea: React.FC<TextareaProps> = ({
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  className,
  label,
  rows,
  cols,
}) => {
  return (
    <>
      {label && <label className="textarea-label">{label}</label>}
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`custom-textarea ${className}`}
        rows={rows}
        cols={cols}
      />
    </>
  );
};

export default Textarea;
