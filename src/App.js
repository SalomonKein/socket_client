import React from 'react';
import TickersPage from './pages/TickersPage';
import styled from 'styled-components';
import Title from './components/Title';
import Flex from './components/Flex';
import IntervalForm from './components/IntervalForm';

const AppWrapper = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: grey;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

function App() {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title color={'darkblue'} />
      </Flex>
      <TickersPage />
      <IntervalForm />
    </AppWrapper>
  );
}

export default App;
