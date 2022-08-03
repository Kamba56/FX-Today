import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => (
  <div>
    <div>This is home page</div>
    <NavLink to="/details">Details</NavLink>
  </div>
);

export default HomePage;
