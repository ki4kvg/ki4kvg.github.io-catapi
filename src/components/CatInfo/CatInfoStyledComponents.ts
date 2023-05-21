import { styled } from "styled-components";
import { Button, Image, Pane, Text } from "evergreen-ui";

export const InfoWrapper = styled(Pane)`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 25px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`;

export const ImageWrapper = styled(Pane)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const DescriptionWrapper = styled(Pane)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  border-radius: 10px;
`;

export const StyledTitle = styled(Text)`
  font-family: 'Noto Sans', sans-serif;
  color: #373D59;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-bottom: 2px solid #8C6CED;
  padding-bottom: 5px;
`;

export const StyledText = styled(Text)`
  font-family: 'Noto Sans', sans-serif;
  color: #373D59;
  display: flex;
  justify-content: left;
  width: 100%;
  border-bottom: 1px solid #8C6CED;
  padding-bottom: 1px;
`;

export const AllInfoWrapper = styled(Pane)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10px 10px 10px;
`;

export const CharacteristicText = styled(Pane)`
  display: flex;
  justify-content: left;
  font-family: 'Noto Sans', sans-serif;
  color: #373D59;
  font-weight: 600;
  padding: 5px 0 5px 0;
  width: 100%;
`;

export const ButtonWrapper = styled(Pane)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

export const StyledButton = styled(Button)`
  color: #FFFFFF;
  background: linear-gradient(180deg, #9B7EFA 0%, #7E5AE1 100%);
`;