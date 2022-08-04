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
        <div key={coin.rank}>
          <NavLink
            to="/details"
            state={coin}
          >
            <h2>{coin.name}</h2>
            <span>
              $
              {Number(coin.priceUsd).toFixed(3)}
            </span>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
export default HomePage;
