import styled from 'styled-components';
import { FlexCenter, ParaOpenSans } from './utils/Utils.styled';
import background from '../assets/bg.png';

export const AboutUsContainer = styled(FlexCenter)`
  /* App bg */
  background: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;

  /* Section Padding */
  padding: 4rem 6rem;

  @media screen and (max-width: 850px) {
    padding: 4rem;
  }

  @media screen and (max-width: 650px) {
    padding: 4rem 2rem;
  }

  /* Main Style */
  position: relative;
`;

export const OverlayContainer = styled(FlexCenter)`
  position: absolute;
  inset: 0;
`;

export const BackgroundImage = styled.img`
  width: 391px;
  height: 415px;
  z-index: 0;

  /* Media Queries */
  @media screen and (max-width:650px){
    width: 80%;
    height: 320px;
  }
`;

export const AboutUsContentContainer = styled(FlexCenter)`
  width: 100%;
  z-index: 2;

  /* Media Queries */
  @media screen and (max-width:900px){
    flex-direction: column;
  }
`;

export const AboutUsContentAbout = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  li {
    margin: 2rem 0;
    color: var(--color-grey);
  }

  /* Media Queries */
  @media screen and (min-width:2000px){
    li {
      margin: 4rem 0;
    }
  }
`;

export const StyledPara = styled(ParaOpenSans)``;

export const AboutUsContentKnife = styled(FlexCenter)`
  margin: 2rem 4rem;

  img {
    height: 910px;
  }

  /* Media Queries */
  @media screen and (max-width:900px){
    margin: 4rem 0;
  }

  @media screen and (min-width:2000px){
    img {
      height: 1110px;
    }

  }
`;

export const AboutUsContentHistory = styled(AboutUsContentAbout)`
  justify-content: flex-start;
  align-items: flex-start;
`;
