import { configureStore } from "@reduxjs/toolkit";
import playgroundReducer from "./playground-slice";
import settingsReducer from "./settings-slice";

const store = configureStore({
    reducer: {
        playground: playgroundReducer,
        settings: settingsReducer
    },
});

export default store;
