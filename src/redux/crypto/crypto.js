const LOAD_COINS = 'LOAD_COINS';
const initial = [];
const baseURL = 'https://api.coincap.io/v2/assets';

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

export const loadCoinThunk = () => (dispatch) => fetch(baseURL)
  .then((res) => res.json())
  .then((data) => dispatch(loadCoin(data.data)));

export default coinsReducer;
