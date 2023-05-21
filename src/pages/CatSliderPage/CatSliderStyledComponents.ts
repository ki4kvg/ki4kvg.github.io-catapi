import { styled } from "styled-components";
import { IconButton, Pane } from "evergreen-ui";

export const Wrapper = styled(Pane)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #F5F5F5;
  padding: 20%;
  @media (max-width: 1200px) {
    padding: 10%;
  }
  @media (max-width: 500px) {
    padding: 5%;
  }
`;

export const CatSliderWrapper = styled(Pane)`
  width: 100%;
  padding: 15px 5px;
  background-color: #FFFFFF;
  border-radius: 15px;
  transition-duration: 0.3s;
`;


export const CatInfoWrapper = styled(Pane)`
  display: flex;
  align-items: center;
  width: 100%;
`;


export const StyledIconButton = styled(IconButton)`
  border: none;
  border-radius: 50px;
  opacity: 0.7;

  svg {
    height: 30px;
    width: 30px;
    fill: #8C6CED;
  }

  &:active,
  &:hover,
  &:focus {
    border-color: transparent !important;
    box-shadow: none !important;
  }
`;