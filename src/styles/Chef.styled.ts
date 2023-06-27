import styled from 'styled-components';
import { AppBg, AppWrapperInfo, ParaOpenSans } from './utils/Utils.styled';

export const ChefContainer = styled(AppBg)`
  /* App Wrapper */
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 100vh;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
  }

  /* Section Padding */
  padding: 4rem 6rem;

  @media screen and (max-width: 850px) {
    padding: 4rem;
  }

  @media screen and (max-width: 650px) {
    padding: 4rem 2rem;
  }
`;

export const ChefInnerWrapper = styled.div`
  /* App Image Wrapper */
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 2rem;

  img {
    width: 80%;
  }

  @media screen and (max-width: 1150px) {
    margin: 5rem 0 0 0;

    img {
      width: 100%;
    }
  }

  /* App Image Wrapper Reverse */
  justify-content: flex-start;
  margin-right: 2rem;

  @media screen and (max-width: 1150px) {
    margin: 0 0 5rem 0;
  }
`;

export const ChefBioContainer = styled(AppWrapperInfo)``;

export const ChefContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5rem;
`;

export const ChefContentQuote = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  img {
    width: 47px;
    height: 40px;
    margin: 0 1rem 1rem 0;
  }
`;

export const ChefContentQuoteText = styled(ParaOpenSans)``;

export const ChefContentQuoteTextSecondQuote = styled(ParaOpenSans)``;

export const ChefSign = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

export const ChefName = styled.p`
  font-family: var(--font-base);
  font-weight: 400;
  font-size: 32;
  line-height: 41px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: var(--color-golden);
`;

export const ChefDesignation = styled(ParaOpenSans)``;

export const ChefSignImg = styled.img`
  width: 250px;
  margin-top: 3rem;

  @media screen and (min-width: 2000px) {
    width: 370px;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
  }
`;
