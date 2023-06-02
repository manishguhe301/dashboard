import React from 'react';
import styled from 'styled-components';
import TableHeader from './TableHeader';
import TableData from './TableData';

const TableWrapper = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 16px;
  height: 450px;
  border: 1px solid #d4d7e0;
  border-radius: 20px;
  overflow: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

const Table = () => {
  return (
    <TableWrapper className='tableWrapper'>
      <TableHeader />
      <TableData />
    </TableWrapper>
  );
};

export default Table;
