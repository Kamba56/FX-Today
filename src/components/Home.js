import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadCoinThunk } from '../redux/crypto/crypto';

const HomePage = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCoinThunk());
  }, []);

  return (
    <div>
      {coins.map((coin) => (
        <NavLink
          key={coin.rank}
          details={coin}
          to="/details"
          state={coin}
        >
          {coin.name}
        </NavLink>
      ))}
    </div>
  );
};
export default HomePage;
