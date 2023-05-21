import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBreedsRequest, getCatsByBreedRequest, getCatsRequest } from "../../API/catsRequest";
import { IBreedRequestBody } from "../interfaces";

export const getCatsAction = createAsyncThunk(
    'cats/getCatsAction',
    async (_, thunkAPI) => {
        try {
            return await getCatsRequest()
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const getBreedsAction = createAsyncThunk(
    'cats/getBreedsAction',
    async (_, thunkAPI) => {
        try {
            return await getBreedsRequest()
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const getCatsByBreedAction = createAsyncThunk(
    'cats/getCatsByBreedAction',
    async (breedRequestBody: IBreedRequestBody, thunkAPI) => {
        try {
            return await getCatsByBreedRequest(breedRequestBody);
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const getCatsByBreedImagesAction = createAsyncThunk(
    'cats/getCatsByBreedImagesAction',
    async (breedRequestBody: IBreedRequestBody, thunkAPI) => {
        try {
            const res = await getCatsByBreedRequest(breedRequestBody);
            return {breedRequestBody, res}
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)