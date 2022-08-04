import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const SearchResult = () => {
  const coins = useSelector((state) => state.coins);

  const crypt = coins.search;
  if (crypt.length === 0) {
    return (
      <p>Coin not found</p>
    );
  }
  return (
    <div>
      {crypt.map((coin) => (
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

export default SearchResult;
