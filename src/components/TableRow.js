import React from 'react';
import styled from 'styled-components';
import Radio from '@mui/material/Radio';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Heading = styled.span`
  font-size: 14px;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const Subtitle = styled.span`
  font-size: 12px;
  margin-top: 2px;
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #70768c;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
  width: 32px;
`;

const TableRow = ({ item }) => (
  <table style={{ width: '100%' }}>
    <tbody>
      <tr>
        <td style={{ width: '30%' }}>
          <ContentWrapper>
            <Radio disabled />
            <Image src={item.logo} alt={item.brand_name} />
            <HeadingWrapper>
              <Heading>{item.brand_name}</Heading>
              <Subtitle>{item.sub_title}</Subtitle>
            </HeadingWrapper>
          </ContentWrapper>
        </td>
        <td style={{ width: '20%' }}>
          <Text>{item.quantity}</Text>
        </td>
        <td style={{ width: '18%' }}>
          <Text>{item.amount}</Text>
        </td>
        <td style={{ width: '22%' }}>
          <Text>{item.placed_on}</Text>
        </td>
        <td>
          <MoreHorizIcon style={{ color: '#828282' }} />
        </td>
      </tr>
    </tbody>
  </table>
);

export default TableRow;
