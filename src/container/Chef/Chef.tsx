import React from 'react';
import { ChefBioContainer, ChefContainer, ChefInnerWrapper } from '../../styles/Chef.styled';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { HeadTextCormorant } from '../../styles/utils/Utils.styled';

const Chef = () => <ChefContainer>
  <ChefInnerWrapper>
    <img src={images.chef} alt="chef" />
  </ChefInnerWrapper>
  <ChefBioContainer>
    <SubHeading title="Chef's word" />
    <HeadTextCormorant>What we believe in</HeadTextCormorant>
  </ChefBioContainer>
</ChefContainer>;

export default Chef;
