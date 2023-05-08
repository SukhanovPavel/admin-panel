import { createSlice } from '@reduxjs/toolkit';
import {setOrders} from "./ordersSlice";

export const filtersRowSlice = createSlice({

    name: 'filtersRow',

    initialState: {
        searchValue: '',
        openFiltersButton: false,
        dateInputValueFrom: '',
        dateInputValueTo: '',
        orderStatus: '',
        orderPriceFrom: '',
        orderPriceTo: ''
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
        clearFilters: (_, {payload}) => {
            return {
            searchValue: '',
            openFiltersButton: false,
            dateInputValueFrom: '',
            dateInputValueTo: '',
            orderStatus: '',
            orderPriceFrom: '',
            orderPriceTo: ''
        }},
        setFilterData: (state, {payload}) => ({...state, [payload.name]: payload.text}),

        setDateInputValueFrom: ( state, { payload } ) => { 
            state.dateInputValueFrom = payload.text;
        },
        setDateInputValueTo: ( state, { payload } ) => { 
            state.dateInputValueTo = payload.text
        },
        setOrderStatus: (state, {payload}) => (
            {
                ...state,
                orderStatus: payload
            }),
        setOrderPriceFrom: ( state, { payload } ) => { 
                state.orderPriceFrom = payload.text
        },
        setOrderPriceTo: ( state, { payload } ) => { 
                state.orderPriceTo = payload.text
        },
        confirmFiltersButton: (state, {payload}) => {
            payload.filter(item => item.orderStatus === state.orderStatus)
        }
    }
})

export const {
    setFilterData,
    clearSearchValue,
    setSearchValue,
    setOpenFiltersButton,
    clearFilters,
    setDateInputValueFrom,
    setDateInputValueTo,
    setOrderStatus,
    setOrderPriceFrom,
    setOrderPriceTo,
    confirmFiltersButton,
    setApplyFiltersButton

} = filtersRowSlice.actions;

export default filtersRowSlice.reducer;