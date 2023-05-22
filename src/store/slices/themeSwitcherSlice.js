import {useLocalStorage} from "../../features/useLocalStorage/useLocalStorage";
import {createSlice} from "@reduxjs/toolkit";


const themeSwitcherSlice = createSlice({

    name: "themeSwitcher",

    initialState: {
        // themeValue: defaultDark? "dark" : "light",

    },

    reducers: {
        changeTheme: (state, { payload }) => {
            state.themeValue = payload
        }
    }
})

export const { changeTheme } = themeSwitcherSlice.actions;

export default themeSwitcherSlice.reducer;