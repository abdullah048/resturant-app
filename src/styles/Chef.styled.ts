import styled from 'styled-components';
import { AppBg, AppWrapperInfo } from './utils/Utils.styled';

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
