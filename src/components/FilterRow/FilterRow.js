import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    FilterRowTop,
    FilterRowBottom
} from '../index';
import { getIsFiltersOpen } from '../../store/selectors/view';
import {setOrderStatus, confirmFiltersButton} from "../../store/slices/filtersRowSlice";
import {filterOrdersDate, filterOrdersStatus, filterOrdersPrice} from "../../store/slices/ordersSlice";

import logger from "redux-logger";

const dateI = new Date();

export const FilterRow = ({searchValue, setInitialOrders}) => {

    const dispatch = useDispatch();

    let [inputValue, setInputValue] = useState("");

    let [filter, setFilter] = useState(false);

    const dateInputValueFrom = useSelector(store => store.filtersRow.dateInputValueFrom );
    const dateInputValueTo = useSelector(store => store.filtersRow.dateInputValueTo );
    const date = {dateInputValueFrom: dateInputValueFrom, dateInputValueTo: dateInputValueTo};

    const isFiltersOpen = useSelector(getIsFiltersOpen);
    const orderStatus = useSelector(state => state.filtersRow.orderStatus);
    const orders = useSelector(state => state.orders);

    const orderPriceFrom = useSelector(store => store.filtersRow.orderPriceFrom );
    const orderPriceTo = useSelector(store => store.filtersRow.orderPriceTo );
    const orderPrice = {orderPriceFrom: orderPriceFrom, orderPriceTo: orderPriceTo};

    return (
        <>
        <FilterRowTop
            searchValue={searchValue}
            onChange={ (event) => setInputValue(inputValue = event.target.value) }
            inputValue={ inputValue }
            handleClickInput={ () => setInputValue(inputValue = "") }
            handleClickFiltres={ () => setFilter(!filter) }
            handleClickClearFilters={ () => setInputValue(inputValue = "") }
            setInitialOrders={setInitialOrders}
        />

        {isFiltersOpen &&
            <FilterRowBottom
                startFilter={() => {
                    dispatch(filterOrdersDate(date));
                    orderStatus && dispatch(filterOrdersStatus(orderStatus));
                    dispatch(filterOrdersPrice(orderPrice));
                }}
                confirmFiltersButton={confirmFiltersButton}
                filterNone = { filter }
                orderStatusValue={orderStatus}
                setOrderStatusValue={setOrderStatus}
                setInitialOrders={setInitialOrders}
            />
        }
        </>
    )
}