const LOAD_COINS = 'LOAD_COINS';
const initial = [];

const coinsReducer = (state = initial, action) => {
  switch (action.type) {
    case LOAD_COINS:
      return action.payload;

    default:
      return state;
  }
};

export default coinsReducer;
