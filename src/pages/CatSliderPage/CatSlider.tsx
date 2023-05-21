import { ArrowLeftIcon, ArrowRightIcon, Spinner } from "evergreen-ui";
import { SliderBar } from "../../components/SliderBar/SliderBar";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getBreedsAction, getCatsByBreedAction, getCatsByBreedImagesAction } from "../../store/actions/catsActions";
import { IBreedRequestBody, ICatsBreeds } from "../../store/interfaces";
import { CatInfo } from "../../components/CatInfo/CatInfo";
import { CatInfoWrapper, CatSliderWrapper, StyledIconButton, Wrapper } from "./CatSliderStyledComponents";

export const CatSlider = () => {

    const dispatch = useAppDispatch()

    const {cats, breeds, isLoading} = useAppSelector((state) => state.catsReducer)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        dispatch(getBreedsAction())
    }, [])

    useEffect(() => {
        breeds.map((breed: ICatsBreeds, index: number) => {
            if (index < 10) {
                const body: IBreedRequestBody = {
                    currentImageIndex,
                    limit: 10,
                    breedId: breed.id,
                }
                dispatch(getCatsByBreedAction(body))
            }
        })
    }, [breeds])

    const handleNextImage = () => {
        currentImageIndex === 9 ? setCurrentImageIndex(0) : setCurrentImageIndex(prevState => prevState + 1)
    }

    const handlePrevImage = () => {
        currentImageIndex === 0 ? setCurrentImageIndex(9) : setCurrentImageIndex(prevState => prevState - 1)
    }

    const handleGetNewImage = (currentImageIndex: number, breed: ICatsBreeds) => {
        const body: IBreedRequestBody = {
            currentImageIndex,
            limit: 10,
            breedId: breed.id,
        }
        dispatch(getCatsByBreedImagesAction(body))
    }

    return (
        <Wrapper>
            {isLoading ? <Spinner/> :
                <CatSliderWrapper>
                    <CatInfoWrapper>
                        <StyledIconButton marginRight="5px" onClick={() => handlePrevImage()} icon={ArrowLeftIcon}/>
                        {cats.length ?
                            <CatInfo cats={cats} currentImageIndex={currentImageIndex}
                                     handleGetNewImage={handleGetNewImage}/>
                            : null}
                        <StyledIconButton marginLeft="5px" onClick={() => handleNextImage()} icon={ArrowRightIcon}/>
                    </CatInfoWrapper>
                    <SliderBar currentImageIndex={currentImageIndex} fullLength={cats.length - 1}/>
                </CatSliderWrapper>
            }
        </Wrapper>
    )
}