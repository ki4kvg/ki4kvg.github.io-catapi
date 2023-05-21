import { Link, Spinner } from "evergreen-ui";
import React, { FC } from "react";
import { ICats, ICatsBreeds } from "../../store/interfaces";
import {
    AllInfoWrapper,
    ButtonWrapper,
    CharacteristicText,
    DescriptionWrapper,
    ImageWrapper,
    InfoWrapper,
    StyledButton,
    StyledImage,
    StyledText,
    StyledTitle
} from "./CatInfoStyledComponents";

interface IProps {
    currentImageIndex: number,
    cats: ICats[],
    handleGetNewImage: (currentImageIndex: number, breed: ICatsBreeds) => void,
    isImageLoading: boolean,
}

export const CatInfo: FC<IProps> = ({currentImageIndex, cats, handleGetNewImage, isImageLoading}) => {
    return (
        <InfoWrapper>

            <ImageWrapper>
                {isImageLoading ?
                    <Spinner/>
                    :
                    <StyledImage src={`${cats[currentImageIndex].url}`}/>
                }

            </ImageWrapper>

            <DescriptionWrapper>
                {cats[currentImageIndex].breeds.map((breed) => {
                    return (
                        <>
                            <StyledTitle fontWeight={600} fontSize="20px">{breed.name}</StyledTitle>
                            <AllInfoWrapper>
                                <CharacteristicText>Temperament</CharacteristicText>
                                <StyledText fontSize="16px">{breed.temperament}</StyledText>
                                <CharacteristicText>Weight</CharacteristicText>
                                <StyledText fontSize="16px">{breed.weight.metric}kg</StyledText>
                                <CharacteristicText>Life span</CharacteristicText>
                                <StyledText fontSize="16px">{breed.life_span} years</StyledText>
                                <CharacteristicText>Origin country</CharacteristicText>
                                <StyledText fontSize="16px">{breed.origin}</StyledText>
                            </AllInfoWrapper>
                            <ButtonWrapper>
                                <Link href={`${breed.wikipedia_url}`} target="_blank">
                                    <StyledButton>Wikipedia</StyledButton>
                                </Link>
                                <StyledButton onClick={() => handleGetNewImage(currentImageIndex, breed)}>Random
                                    Photo</StyledButton>
                            </ButtonWrapper>
                        </>
                    )
                })}
            </DescriptionWrapper>
        </InfoWrapper>
    )
}