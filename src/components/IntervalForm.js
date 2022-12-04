import React, {useState} from 'react';
import axios from 'axios';
import Button from './Button';
import styled from 'styled-components';
import {getTickets, reconnectTickets} from '../api';
import {ADD_DATA_FROM_SERVER, SERVER_URL} from '../utils/const';
import {setTickers} from '../redux/actions';
import {useDispatch} from 'react-redux';

const StyledForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
`;

export default function IntervalForm() {
  const [choice, setChoice] = useState('');
  const dispatch = useDispatch();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios.post(SERVER_URL, {choice});
    reconnectTickets('disconnect', function (response) {
      dispatch(setTickers(response));
    });
    getTickets(ADD_DATA_FROM_SERVER, function (response) {
      dispatch(setTickers(response));
    });
  };
  function handleChange(event) {
    setChoice(event.target.value);
  }

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <label
        htmlFor="selectInterval"
        style={{color: 'white', marginRight: '10px'}}
      >
        {' '}
        Choice interval:
      </label>
      <select value={choice} onChange={handleChange} id="selectInterval">
        <option>Choice interval</option>
        <option value="3000">3 seconds</option>
        <option value="5000">5 seconds</option>
        <option value="10000">10 seconds</option>
        <option value="15000">15 seconds</option>
      </select>
      <Button style={{marginLeft: '10px'}} height="25px" type="submit">
        submit
      </Button>
    </StyledForm>
  );
}
