import styled from 'styled-components';
import backgroundImage from '../../assets/bg.png';

export const SectionPadding = styled.div`
  padding: 4rem 6rem;

  @media screen and (max-width: 850px) {
    padding: 4rem;
  }

  @media screen and (max-width: 650px) {
    padding: 4rem 2rem;
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppBg = styled.div`
  background: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 100vh;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
  }
`;

export const AppWrapperInfo = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const AppWrapperImg = styled.div`
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
`;

export const AppWrapperImgReverse = styled.div`
  justify-content: flex-start;
  margin-right: 2rem;

  @media screen and (max-width: 1150px) {
    margin: 0 0 5rem 0;
  }
`;

export const CustomButton = styled.button`
  background-color: var(--color-crimson);
  color: var(--color-black);
  font-family: var(--font-base);
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 28px;
  font-size: 16px;
  padding: 0.5rem 1.5rem;
  border-radius: 1px;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 2000px) {
    font-size: 37px;
    line-height: 67px;
  }
`;

export const ParaCormorant = styled.p`
  font-family: var(--font-base);
  color: var(--color-white);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  font-feature-settings: 'tnum' on, 'lnum' on;
  line-height: 29.9px;
  font-size: 23px;

  @media screen and (min-width: 2000px) {
    font-size: 37px;
    line-height: 67px;
  }

  @media screen and (max-width: 650px) {
    font-size: 21px;
  }

  @media screen and (max-width: 450px) {
    font-size: 19px;
  }
`;

export const ParaOpenSans = styled.li`
  font-family: var(--font-alt);
  color: var(--color-white);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  line-height: 28px;
  font-size: 16px;
  list-style: none;

  @media screen and (min-width: 2000px) {
    font-size: 30px;
    line-height: 50px;
  }

  @media screen and (max-width: 650px) {
    font-size: 14px;
  }

  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;

export const HeadTextCormorant = styled.p`
  font-family: var(--font-base);
  color: var(--color-golden);
  font-size: 64px;
  line-height: 83.2px;
  letter-spacing: 0.04em;
  text-transform: capitalize;

  @media screen and (min-width: 2000px) {
    font-size: 150px;
    line-height: 210px;
  }

  @media screen and (max-width: 450px) {
    font-size: 45px;
    line-height: 70px;
  }
`;

export const SpoonImg = styled.img`
  width: 45px;

  @media screen and (min-width: 2000px) {
    width: 80px;
  }
`;
