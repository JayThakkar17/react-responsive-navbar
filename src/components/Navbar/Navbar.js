import React, { useState } from 'react';
import { MenuItems } from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';
import Button from '../Button/Button';

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  const toggleHamburgerHandler = () => setShowHamburger(!showHamburger);

  return (
    <div className='navbar-items'>
      <h1 className='navbar-logo'>
        React
        <FontAwesomeIcon className='fa-react' icon={faReact} />
      </h1>
      <div className='menu-item'>
        <FontAwesomeIcon
          className='menu-items-mobile'
          onClick={toggleHamburgerHandler}
          icon={showHamburger ? faTimes : faBars}
        />
      </div>
      <ul className={showHamburger ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((menu, index) => (
          <li key={index}>
            <div className={menu.cName}>{menu.title}</div>
          </li>
        ))}
      </ul>
      <Button>Sign Up</Button>
    </div>
  );
};

export default Navbar;
