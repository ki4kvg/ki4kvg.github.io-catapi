import { styled } from "styled-components";
import { Pane } from "evergreen-ui";

export const SliderWrapper = styled(Pane)`
  margin-top: 15px;
  height: 8px;
  width: 100%;
  border-radius: 50px;
  background-color: #EFEFEF;
`;

export const Slider = styled(Pane)<{ $currentLength: number, $fullLength:number}>`
  height: 8px;
  transition: 0.3s ease-out;
  width: ${({$currentLength, $fullLength}) => (100 / $fullLength * $currentLength)}%;;
  border-radius: 50px;
  background: linear-gradient(90deg, #9B7EFA 10.49%, #7E5AE1 93.41%);;
`;