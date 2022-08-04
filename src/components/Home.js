import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadCoinThunk, reset, searchThunk } from '../redux/crypto/crypto';
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
    dispatch(searchThunk(value.search));
    setValue({ search: '' });
  };

  const handleChange = (e) => {
    setValue({ search: e.target.value });
  };

  return (
    <section>
      <SearchBar
        handleSearch={handleSearch}
        handleChange={handleChange}
        searchValue={value.search}
      />
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
    </section>
  );
};
export default HomePage;
