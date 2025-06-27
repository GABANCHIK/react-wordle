import { configureStore } from "@reduxjs/toolkit";
import playgroundReducer from "./playground-slice";

const store = configureStore({
    reducer: {
        playground: playgroundReducer,
    },
});

export default store;
