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
            new: false,
            calculation: false,
            confirmed: false,
            postponed : false,
            completed: false,
            cancelled: false,
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
        setOrderStatus: {
            new: state => {
                return !state.orderStatus.new
            },
            calculation: state => {
                return !state.orderStatus.calculation
            },
            confirmed: state => {
                return !state.orderStatus.confirmed
            },
            postponed: state => {
                return !state.orderStatus.postponed
            },
            completed: state => {
                return !state.orderStatus.completed
            },
            cancelled: state => {
                return !state.orderStatus.cancelled
            }, 
        },
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