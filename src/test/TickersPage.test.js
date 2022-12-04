import {fireEvent, render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import TickersPage from '../pages/TickersPage';

describe('click', () => {
  test('CLICK BTN DELETE/ADD TICKER', () => {
    render(
      <Provider store={store}>
        <TickersPage />
      </Provider>
    );
    setTimeout(() => {
      const btn = screen.getByTestId('ticker-btn');
      expect(screen.getByTestId('toggle-elem')).toBeNull();
      fireEvent.click(btn);
      expect(screen.getByTestId('toggle-elem')).toBeInTheDocument();
      fireEvent.click(btn);
      expect(screen.getByTestId('toggle-elem')).toBeNull();
    }, 1000);
  });
});
