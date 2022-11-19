import { createSlice } from '@reduxjs/toolkit';

export const filtersRowSlice = createSlice({

    name: 'filtersRow',

    initialState: {
        searchValue: '',
        openFiltersButton: false,
        clearFilters: '',  // add /////////////
        dateInputValue: {
            from: '',
            to: '',
        },
        orderStatus: {
            Новый: false,
            Рассчет: false,
            Подтвержден: false,
            Отложен : false,
            Выполнен: false,
            Отменен: false,
        },
        orderPrice: {
            from: '',
            to: '',
        },
        applyFiltersButton: '' // add ////////////
    },

    reducers: {
        setSearchValue: ( state, x ) => { 
            state.searchValue += x
        },
        setOpenFiltersButton: state => {
            return !state.openFiltersButton
        },
        setClearFilters: () => {}, //add func ///////////
        setDateInputValueFrom: ( state, event ) => { 
            state.dateInputValue.from = event.target.value
        },
        setDateInputValueTo: ( state, event ) => { 
            state.dateInputValue.to = event.target.value
        },
        setOrderStatus: () => {}, //add ///////////
        setOrderPriceFrom: ( state, event ) => { 
                state.orderPrice.from = event.target.value
        },
        setOrderPriceTo: ( state, event ) => { 
                state.orderPrice.to = event.target.value
        },
        setApplyFiltersButton: () => {}//add ///////////////
    }
})

export const {
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