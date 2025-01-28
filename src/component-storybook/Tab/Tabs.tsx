import React, { useState } from 'react';
import './tab.css';

interface TabsProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="tabs">
      <ul className="tab-list">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              // @ts-ignore
              isActive: index === activeIndex,
              onClick: () => handleTabClick(index),
            });
          }
          return null;
        })}
      </ul>
      <div className="tab-content">
        {React.Children.map(children, (child, index) => {
          if (index === activeIndex && React.isValidElement(child)) {
            return child.props.children;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Tabs;
