import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from '../../store/slices/ordersSlice';
import { setIsLoading } from '../../store/slices/viewSlice';
import {
  PageHeader,
  FilterRow,
  Table,
  ModalCard
} from '../index';

import { orders as initialOrders } from '../../assets/mock/orders';

const App = () => {
  const [modalState, setModalState] = useState(false, );
  const dispatch = useDispatch();

  const orders = useSelector(state => state.orders);

  useEffect(() => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      dispatch(setOrders(initialOrders));
    }, Math.floor(Math.random() * 3000 + 2000)); // 2-5 сек
  }, [dispatch]);

  useEffect(() => {
    if (orders.length > 0) {
      dispatch(setIsLoading(false));
    }
  }, [orders, dispatch])

  return (
  <>
    <PageHeader/>
    <FilterRow />
    <Table openModal={() => setModalState(!modalState)} />
    {modalState ? (
      <ModalCard
        // getModal={modalState}
        handleClickCloseModal={() => setModalState(!modalState)}
        handleClickcloseModalOutside={() => setModalState(!modalState)}
      />
    ) : null} 
  </>
  );
}

export default App;