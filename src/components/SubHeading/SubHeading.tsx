import React from 'react';
import styled from 'styled-components';
import { ParaCormorant } from '../../styles/utils/Utils.styled';
import images from '../../constants/images';

const SubHeading = ({title}) => (
  <Container>
    <StyledParaCormorant>{title}</StyledParaCormorant>
    <ImgContainer>
      <img src={images.spoon} alt="spoon" />
    </ImgContainer>
  </Container>
);

export default SubHeading;

const Container = styled.div`
margin-bottom:1rem;
`;

const StyledParaCormorant = styled(ParaCormorant)``;

const ImgContainer = styled.div``;