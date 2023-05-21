import { createSlice } from "@reduxjs/toolkit";
import { ICatsReducer } from "../interfaces";
import {
    getBreedsAction,
    getCatsAction,
    getCatsByBreedAction,
    getCatsByBreedImagesAction
} from "../actions/catsActions";

const initialState: ICatsReducer = {
    error: '',
    isLoading: false,
    isImageLoading: false,
    cats: [],
    breeds: [],
}

export const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCatsAction.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getCatsAction.fulfilled, (state, action) => {
            state.cats = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getCatsAction.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })

        builder.addCase(getBreedsAction.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getBreedsAction.fulfilled, (state, action) => {
            state.breeds = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getBreedsAction.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })

        builder.addCase(getCatsByBreedAction.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getCatsByBreedAction.fulfilled, (state, action) => {
            state.cats = [...state.cats, action.payload[0]];
            state.isLoading = false;
        })
        builder.addCase(getCatsByBreedAction.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })

        builder.addCase(getCatsByBreedImagesAction.pending, (state) => {
            state.isImageLoading = true;
        })
        builder.addCase(getCatsByBreedImagesAction.fulfilled, (state, action) => {
            const payload = action.payload.res;
            const breedId = action.payload.breedRequestBody.currentImageIndex;
            const randomImageIndex= Math.round(Math.random() * (payload.length - 1));
            state.cats[breedId] = payload[randomImageIndex];
            state.isImageLoading = false;
        })
        builder.addCase(getCatsByBreedImagesAction.rejected, (state, action) => {
            state.error = action.payload;
            state.isImageLoading = false;
        })
    }
})