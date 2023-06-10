import React from 'react';
import { SubHeading } from '../../components';
import {
  SpecialMenuContainer,
  SpecialMenuContent,
  SpecialMenuHeading,
  SpecialMenuImage,
  SpecialMenuItems,
  SpecialMenuLeft,
  SpecialMenuRight,
  SpecialMenuTitle,
} from '../../styles/SpecialMenu.styled';
import {
  CustomButton,
  HeadTextCormorant,
} from '../../styles/utils/Utils.styled';
import { images, data } from '../../constants';
import { SpecialMenuItem } from '../../components/SpecialMenuItem';

const SpecialMenu = () => (
  <SpecialMenuContainer id='menu'>
    <SpecialMenuTitle>
      <SubHeading title={`Menu That Fit's Your Palette`} />
      <HeadTextCormorant>Today's Special</HeadTextCormorant>
    </SpecialMenuTitle>
    <SpecialMenuContent>
      <SpecialMenuLeft>
        <SpecialMenuHeading>Wine & Beer</SpecialMenuHeading>
        <SpecialMenuItems>
          {data.wines.map((wine, index) => (
            <SpecialMenuItem key={wine.title + index} data={wine} index={index} />
          ))}
        </SpecialMenuItems>
      </SpecialMenuLeft>
      <SpecialMenuImage>
        <img src={images.menu} alt='menu' />
      </SpecialMenuImage>
      <SpecialMenuRight>
        <SpecialMenuHeading>Cocktails</SpecialMenuHeading>
        <SpecialMenuItems>
          {data.cocktails.map((cocktail, index) => (
            <SpecialMenuItem key={cocktail.title + index} data={cocktail} index={index} />
          ))}
        </SpecialMenuItems>
      </SpecialMenuRight>
    </SpecialMenuContent>
    <div style={{ marginTop: '15px' }}>
      <CustomButton>View More</CustomButton>
    </div>
  </SpecialMenuContainer>
);

export default SpecialMenu;
