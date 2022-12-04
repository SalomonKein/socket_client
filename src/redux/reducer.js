import {
  ADD_DATA_FROM_SERVER,
  REMOVE_INDEX,
  SET_ON_OFF_STATUS,
} from '../utils/const';

const initialState = {
  tickers: [
    {ticker: {index: 'AAPL', name: 'Apple'}},
    {ticker: {index: 'GOOGL', name: 'Google'}},
    {ticker: {index: 'MSFT', name: 'Microsoft'}},
    {ticker: {index: 'AMZN', name: 'Amazon'}},
    {ticker: {index: 'FB', name: 'Facebook'}},
    {ticker: {index: 'TSLA', name: 'Tesla'}},
  ],
  status: {
    Apple: 'on',
    Google: 'on',
    Microsoft: 'on',
    Amazon: 'on',
    Facebook: 'on',
    Tesla: 'on',
  },
  remove: {
    Apple: false,
    Google: false,
    Microsoft: false,
    Amazon: false,
    Facebook: false,
    Tesla: false,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA_FROM_SERVER: {
      return {
        ...state,
        tickers: action.data,
      };
    }
    case SET_ON_OFF_STATUS: {
      return {
        ...state,
        status: action.data,
      };
    }
    case REMOVE_INDEX: {
      return {
        ...state,
        remove: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
