export interface ICats{
    id: string;
    url: string;
    width: number;
    height:number;
    breeds: Array<ICatsBreeds>;
}

export interface ICatsBreeds {
    weight: {
        imperial: string;
        metric: string;
    }
    id: string;
    name: string;
    temperament: string;
    origin: string;
    countryCodes: string;
    countryCode: string;
    life_span: string;
    wikipedia_url: string;
}

export interface ICatsReducer{
    error: string | unknown;
    isLoading: boolean;
    cats: Array<ICats>;
    breeds: Array<ICatsBreeds>;
}

export interface IBreedRequestBody {
    currentImageIndex: number;
    limit: number;
    breedId: string;
}