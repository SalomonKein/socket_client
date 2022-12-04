import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTickets} from '../api';
import Flex from '../components/Flex';
import TickerButton from '../components/TickerButton';
import TickersItem from '../components/TickersItem';
import {setTickers} from '../redux/actions';
import {ADD_DATA_FROM_SERVER} from '../utils/const';

export default function TickersPage() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const tickers = useSelector((state) => state.tickers);
  const status = useSelector((state) => state.status);
  const remove = useSelector((state) => state.remove);
  const [tickerRemove, setTickerRemove] = useState(false);

  useEffect(() => {
    getTickets(ADD_DATA_FROM_SERVER, function (response) {
      dispatch(setTickers(response));
    }).finally(() => setLoading(false));
  }, []);

  let tickerResult = [...tickers];
  for (let key in remove) {
    if (remove[key] === true) {
      tickerResult = tickerResult.filter((item) => item.ticker.name !== key);
    }
  }

  function setRemove() {
    setTickerRemove(!tickerRemove);
  }

  if (loading) {
    return <Flex>LOADING...</Flex>;
  }
  return (
    <Flex width="800px" direction="column" align="center">
      <Flex justify="space-around" align="center" margin="20px 0">
        {tickers.map((ticker) => (
          <TickerButton setRemove={setRemove} key={ticker.ticker.index}>
            {ticker.ticker.name}
          </TickerButton>
        ))}
      </Flex>
      <Flex direction="column" bRadius="15px" justify="space-around">
        {tickerResult.map((ticker, idx) =>
          idx % 2 === 0 ? (
            <TickersItem
              data-testid="toggle-elem"
              key={ticker.ticker.index}
              ticker={ticker}
              background="lightgray"
              statusOnOf={status}
            />
          ) : (
            <TickersItem
              data-testid="toggle-elem"
              key={ticker.ticker.index}
              ticker={ticker}
              background="white"
              statusOnOf={status}
            />
          )
        )}
      </Flex>
    </Flex>
  );
}
