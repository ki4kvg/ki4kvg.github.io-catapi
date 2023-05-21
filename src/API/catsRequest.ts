import axios from "axios";
import { IBreedRequestBody } from "../store/interfaces";

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    headers: {
        'x-api-key': "live_TBYahmZB4lIxsUfyMCGOIwig4nKDn7X3KRIlQhuzGEG1rTr5RI6fZy12LhE6ssY1"
    }
});

export const getCatsRequest = (limit: number = 10) => {
    return instance.get(`images/search?limit=${limit}`)
        .then(response => {
            return response.data;
        })
}

export const getBreedsRequest = () => {
    return instance.get(`breeds`)
        .then(response => {
            return response.data;
        })
}

export const getCatsByBreedRequest = (breedRequestBody: IBreedRequestBody) => {
    return instance.get(`images/search?limit=${breedRequestBody.limit}&breed_ids=${breedRequestBody.breedId}`)
        .then(response => {
            return response.data;
        })
}