import { createSlice } from '@reduxjs/toolkit';

export const filtersRowSlice = createSlice({

    name: 'filtersRow',

    initialState: {
        searchValue: '',
        openFiltersButton: false,
        clearFilters: '',  // add /////////////
        dateInputValueFrom: '',
        dateInputValueTo: '',
        orderStatus: {
            Новый: false,
            Рассчет: false,
            Подтвержден: false,
            Отложен : false,
            Выполнен: false,
            Отменен: false,
        },
        orderPriceFrom: '',
        orderPriceTo: '',
        applyFiltersButton: '' // add ////////////
    },

    reducers: {
        clearSearchValue : ( state ) => {
            state.searchValue = '';
        },
        setSearchValue : ( state, { payload } ) => {
            state.searchValue = payload.text;
        },
        setOpenFiltersButton: state => {
            return !state.openFiltersButton
        },
        setClearFilters: () => {}, //add func ///////////
        setDateInputValueFrom: ( state, { payload } ) => { 
            state.dateInputValueFrom = payload.text;
        },
        setDateInputValueTo: ( state, { payload } ) => { 
            state.dateInputValueTo = payload.text
        },
        setOrderStatus: () => {}, //add ///////////
        setOrderPriceFrom: ( state, { payload } ) => { 
                state.orderPriceFrom = payload.text
        },
        setOrderPriceTo: ( state, { payload } ) => { 
                state.orderPriceTo = payload.text
        },
        setApplyFiltersButton: () => {}//add ///////////////
    }
})

export const {
    clearSearchValue,
    setSearchValue,
    setOpenFiltersButton,
    setClearFilters,
    setDateInputValueFrom,
    setDateInputValueTo,
    setOrderStatus,
    setOrderPriceFrom,
    setOrderPriceTo,
    setApplyFiltersButton

} = filtersRowSlice.actions;

export default filtersRowSlice.reducer;