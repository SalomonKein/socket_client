import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 0.2rem 1rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  background: ${({background}) => background || '#4682B4'};
  &:hover {
    background: #afeeee;
    color: black;
  }
`;

export default function Button(props) {
  return <StyledButton {...props} />;
}
