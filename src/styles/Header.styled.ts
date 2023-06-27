import styled from 'styled-components';
import {
  AppWrapper,
  AppWrapperImg,
  AppWrapperInfo,
  CustomButton,
  ParaOpenSans,
  SectionPadding,
} from './utils/Utils.styled';

export const HeaderMainContainer = styled(SectionPadding)`
  background: var(--color-black);
`;

export const HeaderInnerWrapper = styled(AppWrapperInfo)`
  h1 {
    font-family: var(--font-base);
    color: var(--color-golden);
    letter-spacing: 0.04em;
    line-height: 117px;
    font-size: 90px;

    @media screen and (max-width: 350px) {
      font-size: 70px;
      line-height: 100px;
    }
  }
`;

export const HeaderInnerWrapperImgContainer = styled(AppWrapperImg)`
  img {
    width: 80%;
  }
`;

export const StyledParaOpenSans = styled(ParaOpenSans)`
  margin: 2rem 0;
  list-style: none;
`;

export const StyledCustomButton = styled(CustomButton)``;
