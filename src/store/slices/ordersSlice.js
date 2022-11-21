import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({

    name: 'orders',

    initialState: [],

    reducers: {
        setOrders : ( _, { payload } ) => {
            return payload;
        },
    }
})

export const {
    setOrders
} = ordersSlice.actions;

export default ordersSlice.reducer;