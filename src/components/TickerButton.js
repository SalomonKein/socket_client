import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeIndex} from '../redux/actions';
import Button from './Button';

export default function TickerButton(props) {
  const remove = useSelector((state) => state.remove);
  const index = props.children;
  const [isRemove, setIsRemove] = useState(remove[index]);
  const dispatch = useDispatch();

  const removeHandler = (e) => {
    setIsRemove(!isRemove);
    remove[index] = !isRemove;
    dispatch(removeIndex(remove));
    props.setRemove();
  };

  return (
    <Button onClick={removeHandler} {...props} data-testid="ticker-btn">
      {isRemove ? (
        <>
          <span>{index}</span>
          <span>add</span>
        </>
      ) : (
        <>
          <span>{index}</span>
          <span>remove</span>
        </>
      )}
    </Button>
  );
}
