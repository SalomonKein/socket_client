import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 1, 5rem;
  color: ${(props) => props.color || 'blue'};
`;

export default function Title(props) {
  return (
    <StyledTitle {...props}>
      Price tickers are real-time via web-sockets.
    </StyledTitle>
  );
}
