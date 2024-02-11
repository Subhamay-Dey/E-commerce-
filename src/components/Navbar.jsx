import React, { useState } from 'react';
import NavItem from './NavItem';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const navItems = ['Home', 'About', 'Contact'];

  return (
    <div className="navbar">
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          index={index}
          isActive={index === activeIndex}
          onClick={handleItemClick}
        >
          {item}
        </NavItem>
      ))}
    </div>
  );
};

export default Navbar;
