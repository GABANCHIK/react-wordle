import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSettingsVisible: false,
    isDarkMode: true,
    isMechanicalKeyboardActive: true,
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
        toggleKeyboardHandler (state) {
            state.isMechanicalKeyboardActive = !state.isMechanicalKeyboardActive;
        }
    },
});

export const settingsActions = settingsSlice.actions;
export default settingsSlice.reducer;
