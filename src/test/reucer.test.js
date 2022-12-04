// import {createReduxStore} from "../../store/store";
// import {Provider} from "react-redux";
import reducer from '../redux/reducer';

// const renderWithRedux = (component, initialState) => {
//     const store = createReduxStore(initialState);

//     return (
//         <Provider store={store}>
//             {component}
//         </Provider>
//     )
// }

describe('tickers reducer', () => {
  const state = {
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

  it('should return default value', () => {
    expect(reducer(undefined, {})).toEqual(state);
  });
  describe('for ADD_DATA_FROM_SERVER action', () => {
    it("should return state with truthy 'loading' property", () => {
      expect(reducer(state.tickers, {type: 'ADD_DATA_FROM_SERVER'})).toEqual([
        {ticker: {index: 'AAPL', name: 'Apple'}},
        {ticker: {index: 'GOOGL', name: 'Google'}},
        {ticker: {index: 'MSFT', name: 'Microsoft'}},
        {ticker: {index: 'AMZN', name: 'Amazon'}},
        {ticker: {index: 'FB', name: 'Facebook'}},
        {ticker: {index: 'TSLA', name: 'Tesla'}},
      ]);
    });
  });
  describe('for SET_ON_OFF_STATUS action', () => {
    it("should add passed data to 'SET_ON_OFF_STATUS' property of state", () => {
      expect(
        reducer(state.status, {
          type: 'SET_ON_OFF_STATUS',
          payload: [
            {
              Apple: 'on',
              Google: 'on',
              Microsoft: 'on',
              Amazon: 'on',
              Facebook: 'on',
              Tesla: 'on',
            },
          ],
        })
      ).toEqual({
        Apple: 'on',
        Google: 'on',
        Microsoft: 'on',
        Amazon: 'on',
        Facebook: 'on',
        Tesla: 'on',
      });
    });
  });
  describe('for REMOVE_INDEX action', () => {
    it("should add passed data to 'REMOVE_INDEX' property of state", () => {
      expect(
        reducer(state.remove, {
          type: 'REMOVE_INDEX',
          payload: {
            Apple: false,
            Google: false,
            Microsoft: false,
            Amazon: false,
            Facebook: false,
            Tesla: false,
          },
        })
      ).toEqual({
        Apple: false,
        Google: false,
        Microsoft: false,
        Amazon: false,
        Facebook: false,
        Tesla: false,
      });
    });
  });
});
