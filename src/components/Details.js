import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div>{state.name}</div>
  );
};

export default Details;
