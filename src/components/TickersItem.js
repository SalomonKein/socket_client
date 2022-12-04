import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {usePrevious} from '../hooks/usePrevious';
import Arrow from './Arrow';
import Flex from './Flex';
import Item from './Item';
import {setOnOffStatus} from '../redux/actions';
import Button from './Button';

export default function TickersItem({ticker, background, statusOnOf}) {
  const index = ticker.ticker.name;
  const [status, setStatus] = useState(statusOnOf[index]);
  const dispatch = useDispatch();

  let currentBackground;
  let arrow;
  const prevTicker = usePrevious(ticker);

  if (prevTicker.change_percent < ticker.change_percent) {
    currentBackground = '#F08080';
    arrow = 'red';
  } else if (prevTicker.change_percent > ticker.change_percent) {
    currentBackground = '#00FF7F';
    arrow = 'green';
  } else {
    currentBackground = 'none';
  }

  const onOffHandler = (e) => {
    if (status === 'on') {
      statusOnOf[index] = 'off';
      setStatus('off');
      dispatch(setOnOffStatus(statusOnOf));
    }
    if (status === 'off') {
      setStatus('on');
      statusOnOf[index] = 'on';
      dispatch(setOnOffStatus(statusOnOf));
    }
  };

  return (
    <Flex
      justify="space-around"
      border="solid black 1px"
      background={background}
      padding="5px"
    >
      <Item bRadius="5px" background="#20B2AA" color="#000000">
        {ticker.ticker.index}
      </Item>
      <Item>{ticker.ticker.name}</Item>
      <Item data-testid="test-elem">
        {status === 'on' ? ticker.price : '0.0'} $
      </Item>
      <Item data-testid="test-elem">
        {status === 'on' ? ticker.change : '0.0'}
      </Item>
      <Arrow arrow={status === 'on' ? arrow : 'none'} />
      <Item
        data-testid="test-elem"
        margin="0 10px"
        background={status === 'on' ? currentBackground : 'none'}
        bRadius="5px"
      >
        {status === 'on' ? ticker.change_percent : '0.0'} %
      </Item>
      <Button
        width="6vw"
        height="25px"
        background="#0000CD"
        onClick={onOffHandler}
        data-testid="on-off-btn"
      >
        {status}
      </Button>
    </Flex>
  );
}
