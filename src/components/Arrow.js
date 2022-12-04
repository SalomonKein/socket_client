import React from 'react';
import styled from 'styled-components';
import redArrow from '../assets/red_arrow.png';
import greenArrow from '../assets/green_arrow.png';
import empty from '../assets/empty.png';

const StyledArrow = styled.div`
  width: 3rem;
  padding: 0.3rem;
  margin-right: 0.7rem;
  display: flex;
  justify-content: end;
  align-item: end;
`;

export default function Arrow({arrow}) {
  if (arrow === 'red') {
    return (
      <StyledArrow>
        {' '}
        <img src={redArrow} alt="red_arrow" style={{height: '20px'}} />
      </StyledArrow>
    );
  } else if (arrow === 'green') {
    return (
      <StyledArrow>
        {' '}
        <img src={greenArrow} alt="green_arrow" style={{height: '20px'}} />
      </StyledArrow>
    );
  } else {
    return (
      <StyledArrow>
        {' '}
        <img src={empty} alt="empty" style={{height: '20px'}} />
      </StyledArrow>
    );
  }
}
