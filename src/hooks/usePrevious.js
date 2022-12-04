import {useEffect} from 'react';

let oldProp = {
  change: '115.49',
  change_percent: '0.92',
  dividend: '0.00',
  exchange: 'NASDAQ',
  last_trade_time: '2022-02-16T15:41:47.000Z',
  price: '148.02',
  ticker: {},
  yield: '1.27',
};

export function usePrevious(value) {
  const prevProps = oldProp;
  useEffect(() => {
    oldProp = value;
  });
  return prevProps;
}
