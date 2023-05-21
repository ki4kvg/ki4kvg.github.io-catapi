import React, { FC } from "react";
import { Slider, SliderWrapper } from "./SliderBarStyledComponents";

interface IProps {
    currentImageIndex: number,
    fullLength: number,
}
export const SliderBar: FC<IProps> = ({currentImageIndex, fullLength}) => {
    return(
        <SliderWrapper>
            <Slider $currentLength={currentImageIndex} $fullLength={fullLength}></Slider>
        </SliderWrapper>
    )
}