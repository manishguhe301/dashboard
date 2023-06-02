import React from 'react';
import styled from 'styled-components';
import RemoveIcon from '@mui/icons-material/Remove';
import Divider from '@mui/material/Divider';

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

const MinusWrapper = styled.div`
  width: 36px;
  height: 36px;
  background: #eff0f6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const TableHeader = () => (
  <>
    <HeaderWrapper>
      <div>
        <Heading>Confirmed</Heading>
        <StyledText>258</StyledText>
      </div>
      <MinusWrapper>
        <RemoveIcon />
      </MinusWrapper>
    </HeaderWrapper>
    <Divider
      style={{
        marginRight: '20px',
        marginLeft: '20px',
        marginBottom: '16px',
      }}
    />
  </>
);

export default TableHeader;
