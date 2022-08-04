import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <section>
      <h1>
        {state.name}
        <span>
          {state.symbol}
        </span>
      </h1>
      <p>
        Current price: $
        {state.priceUsd}
      </p>
      <p>
        24hr volume:
        {state.volumeUsd24Hr}
      </p>
      <p>
        24hr Change percentage:
        {state.changePercent24Hr}
      </p>
      <p>
        Marker Cap:
        {state.marketCapUsd}
      </p>
      <p>
        Supply:
        {state.supply}
      </p>
      <p>
        Maximum Supply:
        {state.maxSuppply}
      </p>
    </section>
  );
};

export default Details;
