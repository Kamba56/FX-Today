const LOAD_COINS = 'LOAD_COINS';
const SEARCH = 'SEARCH_COIN';
const CLEAR = 'CLEAR_SEARCH';
const initial = {
  crypto: [],
  search: [],
};
const baseURL = 'https://api.coincap.io/v2/assets';

const coinsReducer = (state = initial, action) => {
  switch (action.type) {
    case LOAD_COINS:
      return {
        ...state,
        crypto: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case CLEAR:
      return {
        ...state,
        search: [],
      };
    default:
      return state;
  }
};

export const loadCoin = (arr) => ({
  type: LOAD_COINS,
  payload: arr,
});

export const searchCoin = (arr) => ({
  type: SEARCH,
  payload: arr,
});

export const reset = () => ({
  type: CLEAR,
});

export const loadCoinThunk = () => (dispatch) => fetch(baseURL)
  .then((res) => res.json())
  .then((data) => dispatch(loadCoin(data.data)));

export const searchThunk = (coin) => (dispatch) => fetch(`${baseURL}?search=${coin}`)
  .then((res) => res.json())
  .then((data) => dispatch(searchCoin(data.data)));

export default coinsReducer;
