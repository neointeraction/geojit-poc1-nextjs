import React from 'react';
import './title.css';

interface TitleProps {
  level: 1 | 2 | 3 | 4 | 5;
  type?: 'boldItalic' | 'semibold' | 'regularItalic';
  size?: '24' | '20' | '18' | '16' | '14';
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ level, type, size, children }) => {
  const getClassName = () => {
    switch (level) {
      case 1:
        return 'h1';
      case 2:
        return 'h2';
      case 3:
        return 'h3';
      case 4:
        return 'h4';
      case 5:
        return type === 'boldItalic' ? 'h5-bold-italic' : 'h5-semibold';
      default:
        return '';
    }
  };

  const getBodyClassName = () => {
    if (type === 'regularItalic') {
      return `body-${size}`;
    }
    return '';
  };

  const className = level ? getClassName() : getBodyClassName();

  return <div className={className}>{children}</div>;
};

export default Title;
