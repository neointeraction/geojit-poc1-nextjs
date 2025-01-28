import React from 'react';

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <li
      className={`tab-list-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </li>
  );
};

export default Tab;
