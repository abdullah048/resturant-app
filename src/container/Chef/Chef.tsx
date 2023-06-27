import React from 'react';
import {
  ChefBioContainer,
  ChefContainer,
  ChefContent,
  ChefContentQuote,
  ChefContentQuoteText,
  ChefContentQuoteTextSecondQuote,
  ChefDesignation,
  ChefInnerWrapper,
  ChefName,
  ChefSign,
  ChefSignImg,
} from '../../styles/Chef.styled';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { HeadTextCormorant } from '../../styles/utils/Utils.styled';

const Chef = () => (
  <ChefContainer>
    <ChefInnerWrapper>
      <img src={images.chef} alt='chef' />
    </ChefInnerWrapper>
    <ChefBioContainer>
      <SubHeading title="Chef's word" />
      <HeadTextCormorant>What we believe in</HeadTextCormorant>
      <ChefContent>
        <ChefContentQuote>
          <img src={images.quote} alt='Quote' />
          <ChefContentQuoteText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            culpa officiis facilis soluta quos ad!
          </ChefContentQuoteText>
        </ChefContentQuote>
        <ChefContentQuoteTextSecondQuote>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          dolorum quod quas dolore rem similique vel deleniti natus dolor
          quidem?
        </ChefContentQuoteTextSecondQuote>
      </ChefContent>
      <ChefSign>
        <ChefName>Kevin Luo</ChefName>
        <ChefDesignation>Chef & Founder</ChefDesignation>
        <ChefSignImg src={images.sign} alt='sign' />
      </ChefSign>
    </ChefBioContainer>
  </ChefContainer>
);

export default Chef;
