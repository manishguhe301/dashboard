import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import TableRow from './TableRow';
import data from '../assets/data.json';

const StyledTable = styled.div`
  margin: 12px;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 16px;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.5);
  margin-left: 8px;
  background: transparent;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SelectWrapper = styled.select`
  outline: none;
  border: none;
  padding: 8px;
  width: 140px;
  border-radius: 8px;
  background: #eff0f6;
`;

const TableData = () => {
  const [activeOrderValue, setActiveOrderValue] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [placedOnValue, setPlacedOnValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    let newData = [...data];
    if (activeOrderValue !== '') {
      newData = newData.filter(
        (item) => item.status.toLowerCase() === activeOrderValue
      );
    }
    if (amountValue === 'lowTOhigh') {
      newData.sort((a, b) => Number(a.amount) - Number(b.amount));
    } else if (amountValue === 'highTOlow') {
      newData.sort((a, b) => Number(b.amount) - Number(a.amount));
    }
    if (placedOnValue === 'newest') {
      newData.sort((a, b) => new Date(b.placed_on) - new Date(a.placed_on));
    } else if (placedOnValue === 'oldest') {
      newData.sort((a, b) => new Date(a.placed_on) - new Date(b.placed_on));
    }
    if (searchValue !== '') {
      newData = newData.filter((item) =>
        item.brand_name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    setFilteredData(newData);
  }, [activeOrderValue, amountValue, placedOnValue, searchValue]);

  return (
    <StyledTable>
      <SearchBarWrapper>
        <ContentWrapper>
          <SearchIcon style={{ color: '#DADADA' }} />
          <StyledInput
            type='text'
            placeholder='Search'
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </ContentWrapper>
        <ContentWrapper>
          <SelectWrapper
            onChange={(e) => setActiveOrderValue(e.target.value.toLowerCase())}
          >
            <option value=''>Active Orders</option>
            <option>Confirmed</option>
            <option>Delivered</option>
            <option>Refund Completed (30d)</option>
            <option>Pending</option>
          </SelectWrapper>
          <ImportExportIcon />
        </ContentWrapper>
        <ContentWrapper>
          <SelectWrapper onChange={(e) => setAmountValue(e.target.value)}>
            <option value=''>Amount</option>
            <option value='lowTOhigh'>Low to High</option>
            <option value='highTOlow'>High to Low</option>
          </SelectWrapper>
          <ImportExportIcon />
        </ContentWrapper>
        <ContentWrapper>
          <SelectWrapper onChange={(e) => setPlacedOnValue(e.target.value)}>
            <option value=''>Placed On</option>
            <option value='newest'>Newest</option>
            <option value='oldest'>Oldest</option>
          </SelectWrapper>
          <ImportExportIcon />
        </ContentWrapper>
        <ContentWrapper>
          <SelectWrapper>
            <option value=''>Options</option>
          </SelectWrapper>
        </ContentWrapper>
      </SearchBarWrapper>
      <div>
        {filteredData.map((item, index) => (
          <TableRow key={index} item={item} />
        ))}
      </div>
    </StyledTable>
  );
};

export default TableData;
