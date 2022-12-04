import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from './redux/store';
import TickersPage from './pages/TickersPage';

test('START APP TEST', () => {
  render(
    <Provider store={store}>
      <TickersPage />
    </Provider>
  );
  setTimeout(() => {
    const linkElement = screen.getByText(
      /Price tickers are real-time via web-sockets./i
    );
    expect(linkElement).toBeInTheDocument();
  }, 1000);
});
