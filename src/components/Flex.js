import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'start'};
  max-width: ${(props) => props.width || '100%'};
  padding: ${(props) => props.padding || '0'};
  margin: ${({margin}) => margin || '0'};
  border-bottom: ${({border}) => border || 'none'};
  background: ${({background}) => background || 'none'};
  border-radius: ${({bRadius}) => bRadius || 'none'};
`;

export default function Flex(props) {
  return <StyledFlex {...props} />;
}
