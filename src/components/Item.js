import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  width: 6rem;
  padding: 1rem;
  height: 1.5rem;
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify || 'center'};
  margin: ${({margin}) => margin || '0'};
  border: ${({border}) => border || 'none'};
  border-radius: ${({bRadius}) => bRadius || 'none'};
  background: ${({background}) => background || 'none'};
  color: ${({color}) => color || 'black'};
  // transition:  'all 3s linear';
`;

export default function Item(props) {
  return <StyledItem {...props} />;
}
