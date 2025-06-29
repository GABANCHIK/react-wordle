import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSettingsVisible: false,
    isDarkMode: true,
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        toggleSettingsVisibility(state) {
            state.isSettingsVisible = !state.isSettingsVisible;
        },
        toggleThemeHandler(state) {
            state.isDarkMode = !state.isDarkMode;
        },
        setTheme(state, action) {
            state.isDarkMode = action.payload;
        },
    },
});

export const settingsActions = settingsSlice.actions;
export default settingsSlice.reducer;
