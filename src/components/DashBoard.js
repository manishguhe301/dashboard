import React from 'react';
import styled from 'styled-components';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const DashBoardWrapper = styled.div`
  background: #f9f9f9;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  display: flex;
`;

const DashBoard = () => {
  return (
    <DashBoardWrapper>
      <LeftSection />
      <RightSection />
    </DashBoardWrapper>
  );
};

export default DashBoard;
