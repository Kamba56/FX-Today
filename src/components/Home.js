import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadCoinThunk, reset, searchCoin } from '../redux/crypto/crypto';
import SearchBar from './Search';

const HomePage = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  const crypt = coins.crypto;

  useEffect(() => {
    dispatch(loadCoinThunk());
    dispatch(reset());
  }, []);

  const [value, setValue] = useState({ search: '' });

  const handleSearch = (e) => {
    e.preventDefault();
    if (value.search === '') {
      return;
    }
    dispatch(searchCoin(value.search));
    setValue({ search: '' });
  };

  const handleChange = (e) => {
    setValue({ search: e.target.value });
  };

  return (
    <section className="my-container">
      <SearchBar
        handleSearch={handleSearch}
        handleChange={handleChange}
        searchValue={value.search}
      />
      <div className="grid">
        {crypt.map((coin) => (
          <div key={coin.rank} className="grid-item">
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
    </section>
  );
};
export default HomePage;
