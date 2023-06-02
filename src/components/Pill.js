import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  font-size: 1rem;
  margin: 0;
  margin-left: 20px;
  color: ${(props) => (props.item.name === 'Workspaces' ? '#1B59F8' : '')};
`;

const PillWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
  padding-left: 12px;
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 30px;
  background: ${(props) =>
    props.item.name === 'Workspaces' ? 'rgba(27, 89, 248, 0.1)' : ''};
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const Icon = styled.span`
  color: ${(props) => (props.item.name === 'Workspaces' ? '#1B59F8' : '')};
`;

const Pill = ({ item }) => {
  return (
    <PillWrapper item={item}>
      <Icon item={item}>{<item.icon />}</Icon>
      <Text item={item}>{item.name}</Text>
    </PillWrapper>
  );
};

export default Pill;
