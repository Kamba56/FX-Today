import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const x = 5;
  console.log(x);
  return (
    <div>
      <div>This is home page</div>
      <NavLink to="/details">Details</NavLink>
    </div>
  );
};
export default HomePage;
