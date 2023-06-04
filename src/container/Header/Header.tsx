import React from 'react';
import { HeaderInnerWrapper, HeaderInnerWrapperImgContainer, HeaderMainContainer, StyledCustomButton, StyledParaOpenSans } from '../../styles/Header.styled';
import { SubHeading } from '../../components';
import { AppWrapper } from '../../styles/utils/Utils.styled';
import images from '../../constants/images';

const Header = () => (
  <HeaderMainContainer as={AppWrapper} id='home'>
    <HeaderInnerWrapper>
      <SubHeading title='Chase the new Flavour' />
      <h1>The Key to fine Dining</h1>
      <StyledParaOpenSans>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita quod amet aut deleniti quas suscipit veritatis, perspiciatis maxime deserunt.
      </StyledParaOpenSans>
      <StyledCustomButton>Explore More</StyledCustomButton>
    </HeaderInnerWrapper>
    <HeaderInnerWrapperImgContainer>
      <img src={images.welcome} alt="welcome-img" />
    </HeaderInnerWrapperImgContainer>
  </HeaderMainContainer>
);

export default Header;
