import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import Table from './Table';
import Issues from './Issues';

const Wrapper = styled.div`
  width: 100%;
`;

const RightSection = () => {
  return (
    <Wrapper>
      <Header />
      <Table />
      <Issues />
    </Wrapper>
  );
};

export default RightSection;
