import styled from "styled-components";
import { FlexCenter } from "./utils/Utils.styled";

export const SpecialMenuContainer = styled(FlexCenter)`
  /* Section Padding */
  padding: 4rem 6rem;

  @media screen and (max-width: 850px) {
    padding: 4rem;
  }

  @media screen and (max-width: 650px) {
    padding: 4rem 2rem;
  }
  /* Main Styles */
  flex-direction: column;
  background: var(--color-black);
`;

export const SpecialMenuTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const SpecialMenuContent = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  /* Media Queries */

  @media screen and (max-width:1150px){
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

`;

export const SpecialMenuLeft = styled(FlexCenter)`
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

export const SpecialMenuHeading = styled.p`
  font-family: var(--font-base);
  font-weight: 600;
  font-size: 45px;
  line-height: 58.5px;
  letter-spacing: 0.04em;
  color: var(--color-white);

  /* Media Queries */

  @media screen and (max-width:650px){
    font-size: 35px;
    line-height: 48.5px;
  }
`;

export const SpecialMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  width: 100%;
`;

export const SpecialMenuImage = styled.div`
  width: 410px;
  margin: 0 2rem;

  img {
    width: 100%;
    height: auto;
  }

  /* Media Queries */

  @media screen and (max-width:650px){
    width: 100%;
  }

  @media screen and (max-width:1150px){
    margin: 3rem 0;
  }


  @media screen and (min-width:2000px){
    width:650px;

    img {
      height: 920px;
    }
  }
`;

export const SpecialMenuRight = styled.div`
  flex: 1;
  flex-direction: column;
  width: 100%;
`;
