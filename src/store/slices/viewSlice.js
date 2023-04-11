import { createSlice } from '@reduxjs/toolkit';

export const viewSlice = createSlice({

    name: 'view',

    initialState: {
        isFiltersOpen: false,
        isLoading: false,
    },

    reducers: {
        toggleIsOpenFilter : ( state ) => {
            state.isFiltersOpen = !state.isFiltersOpen;
        },
        setIsLoading : ( state, { payload } ) => {
            state.isLoading = payload;
        },
    }
})

export const {
    toggleIsOpenFilter,
    setIsLoading,
} = viewSlice.actions;

export default viewSlice.reducer;