import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {catsSlice} from "./reducers/catsSliceReducer";

const rootReducer = combineReducers({
    catsReducer: catsSlice.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']