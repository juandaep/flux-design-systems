import React from 'react';

interface SideMenuProps {
  isOpen: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen }) => {
  return (
    <ul>
        <li>test1</li>
        <li>test2</li>
        <li>test3</li>
        <li>test4</li>
        <li>test5</li>
        <li>test6</li>
    </ul>
  );
};

export default SideMenu;