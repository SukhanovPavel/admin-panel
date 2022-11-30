import { createSlice } from '@reduxjs/toolkit';

export const viewSlice = createSlice({

    name: 'view',

    initialState: {
        isFiltersOpen: false,
        isLoading: false,
        isModalOpen: false,
        isDeleteDropDownOpen: false,
    },

    reducers: {
        toggleIsOpenFilter : ( state ) => {
            state.isFiltersOpen = !state.isFiltersOpen;
        },
        setIsLoading : ( state, { payload } ) => {
            state.isLoading = payload;
        },
        setIsModalOpen : ( state, { payload } ) => {
            state.isModalOpen = payload;
        },
        setisDeleteDropDownOpen
    }
})

export const {
    toggleIsOpenFilter,
    setIsLoading,
    setIsModalOpen
} = viewSlice.actions;

export default viewSlice.reducer;