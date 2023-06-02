import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';

const Heading = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const HeadingWrapper = styled.div`
  margin-top: 16px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <div>
      <HeadingWrapper>
        <Heading>Orders</Heading>
        <Button
          style={{
            background: '#1B59F8',
            borderRadius: '10px',
            padding: '8px 12px',
          }}
          variant='contained'
        >
          <AddIcon />
          Add Order
        </Button>
      </HeadingWrapper>
      <Divider
        style={{
          marginRight: '20px',
          marginLeft: '20px',
          marginBottom: '16px',
        }}
      />
    </div>
  );
};

export default Header;
