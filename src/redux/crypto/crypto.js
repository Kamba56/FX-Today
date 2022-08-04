const LOAD_COINS = 'LOAD_COINS';
const initial = [];
// const baseURL = 'api.coincap.io/v2/assets';

const coinsReducer = (state = initial, action) => {
  switch (action.type) {
    case LOAD_COINS:
      return action.payload;

    default:
      return state;
  }
};

export const loadCoin = (arr) => ({
  type: LOAD_COINS,
  payload: arr,
});

// export const loadCoinThunk = () => () => fetch(baseURL)
//   .then((res) => res.json())
//   .then((dat) => console.log(dat.data));

export default coinsReducer;
