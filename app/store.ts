import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../services/pokemonApi";

export const makeStore = () => {
    return configureStore({
        reducer: {
            [pokemonApi.reducerPath]: pokemonApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(pokemonApi.middleware),
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
