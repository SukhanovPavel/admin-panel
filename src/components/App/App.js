import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders, sortNumOrders } from '../../store/slices/ordersSlice';
import { setIsLoading } from '../../store/slices/viewSlice';
import {
  PageHeader,
  FilterRow,
  Table,
  ModalCard
} from '../index';

import { orders as initialOrders } from '../../assets/mock/orders';

const doubleOrders = [...initialOrders];

const App = () => {
  const [modalState, setModalState] = useState(false, );
  const dispatch = useDispatch();

  const searchValue = useSelector(state => state.filtersRow.searchValue);        ////redux
  const orders = useSelector(state => state.orders);

  useEffect(() => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      dispatch(setOrders(doubleOrders));
    }, Math.floor(Math.random() * 1000)); // 2-3 сек
  }, [dispatch]);

  useEffect(() => {
    if (orders.length > 0) {
      dispatch(setIsLoading(false));
    }
  }, [orders, dispatch]);

  let inputFilterOrders = searchValue !== "" ?
      orders.filter(item => item.clientName.includes(searchValue)
          || item.clientName.includes(searchValue[0].toUpperCase() + searchValue.slice(1))
          || item.number.includes(searchValue))
      : orders;

  return (
  <>
    <PageHeader/>
    <FilterRow searchValue={searchValue} setInitialOrders={() => dispatch(setOrders(doubleOrders))}/>
    <Table
        openModal={() => setModalState(!modalState)}
        orders={inputFilterOrders}
        handleFilterProduct={sortNumOrders}
        checkOrder={() => {}}
    />
    {modalState && (
      <ModalCard
        // getModal={modalState}
        handleClickCloseModal={() => setModalState(!modalState)}
        handleClickcloseModalOutside={() => setModalState(!modalState)}
      />
    )}
  </>
  );
}

export default App;