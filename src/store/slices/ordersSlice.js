import { createSlice } from '@reduxjs/toolkit';

const funcForSortDate = (string) => {
    const [day, month, year] = string.split(".");
    return Date.parse(`${year}-${month}-${day}`);
};
export const ordersSlice = createSlice({

    name: 'orders',

    initialState: [],

    reducers: {
        setOrders : ( _, { payload } ) => {
            return payload;
        },
        sortNumOrders: (state, {payload}) => state.sort((a, b) => b[payload] - a[payload]),

        filterOrdersDate: (state, { payload }) => state.filter(item =>
            +(new Date(item.date.split('.').reverse().join("."))) > (payload.dateInputValueFrom ?
                +(new Date(payload.dateInputValueFrom.split('.').reverse().join("."))) : 0) &&
            +(new Date(item.date.split('.').reverse().join("."))) < (payload.dateInputValueTo ?
                +(new Date(payload.dateInputValueTo.split('.').reverse().join("."))) : 9999999999999999999999999999999999)),

        filterOrdersStatus: (state, {payload}) => state.filter(item => item.productStatus === payload),

        filterOrdersPrice: (state, {payload}) => state.filter(item =>
            +item.totalPrice > (payload.orderPriceFrom ? +payload.orderPriceFrom : -1) &&
            +item.totalPrice < (payload.orderPriceTo ? +payload.orderPriceTo : 1e1000)),

        checkAll: state => state.map(item => state[0].checked === false ?
            ({...item, checked: true}) : ({...item, checked: false})),

        checkOrderRow: (state, {payload}) => state.map(item =>
            item.id === payload ? {...item, checked:  !item.checked} : item),

        deleteOrders: (state, {payload}) => state.filter(item => !item.checked),
    }
})

export const {
    setOrders,
    sortNumOrders,
    filterOrdersDate,
    filterOrdersStatus,
    filterOrdersPrice,
    checkAll,
    checkOrderRow,
    deleteOrders,

} = ordersSlice.actions;

export default ordersSlice.reducer;