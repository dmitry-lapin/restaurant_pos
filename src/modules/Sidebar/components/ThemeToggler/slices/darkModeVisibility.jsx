import { createSlice } from "@reduxjs/toolkit";

const darkModeVisibility = createSlice({
    name: 'DarkMode',
    initialState: {
        isDark: false
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.isDark = !state.isDark;
        }
    }
})

export const { toggleDarkMode } = darkModeVisibility.actions;
export default darkModeVisibility.reducer;