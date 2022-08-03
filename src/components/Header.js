import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const Header = () => (
  <header>
    <NavLink to="/">
      <IoIosArrowBack />
    </NavLink>

    <div>
      CryptoToday
    </div>
  </header>
);

export default Header;
