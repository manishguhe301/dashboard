import React from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';

const IssuesWrapper = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 2rem;
  height: 60px;
  border: 1px solid #d4d7e0;
  border-radius: 20px;
`;

const Heading = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-right: 16px;
`;

const StyledText = styled.span`
  color: rgba(47, 47, 47, 0.4);
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px;
  z-index: 9999;
`;

const AddWrapper = styled.div`
  width: 36px;
  height: 36px;
  background: #eff0f6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const Issues = () => {
  return (
    <IssuesWrapper>
      <HeaderWrapper>
        <div>
          <Heading>Issues</Heading>
          <StyledText>21</StyledText>
        </div>
        <AddWrapper>
          <AddIcon />
        </AddWrapper>
      </HeaderWrapper>
    </IssuesWrapper>
  );
};

export default Issues;
