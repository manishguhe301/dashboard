import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import Pill from './Pill';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import MovingIcon from '@mui/icons-material/Moving';

const LeftSectionWrapper = styled.div`
  box-sizing: border-box;
  width: 282px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eff0f6;
  border-radius: 20px;
`;

const ImageWrapper = styled.img`
  margin-top: 28px;
  margin-bottom: 28px;
`;

const PillData = [
  {
    name: 'Reports',
    icon: MovingIcon,
  },
  {
    name: 'Workspaces',
    icon: ViewModuleIcon,
  },
  {
    name: 'Settings',
    icon: SettingsIcon,
  },
];

const LeftSection = () => {
  return (
    <LeftSectionWrapper>
      <ImageWrapper src={Logo} alt='logo' />
      <div>
        {PillData.map((item, index) => {
          return <Pill key={index} item={item} />;
        })}
      </div>
    </LeftSectionWrapper>
  );
};

export default LeftSection;
