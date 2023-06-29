import { IntroStyledProps } from '../types.styled';
import { FlexCenter } from './utils/Utils.styled';
import styled from 'styled-components';

export const IntroContainer = styled.div`
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const VideoOverlay = styled(FlexCenter)<IntroStyledProps>`
  position: absolute;
  inset: 0;
  background-color: transparent;
  transition: background-color 300ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.65);
  }
`;

export const VideoOverlayCircle = styled(FlexCenter)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid var(--color-golden);
  cursor: pointer;
`;
