import { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from '../../store/slices/ordersSlice';
import { setIsLoading, setIsModalOpen } from '../../store/slices/viewSlice';
import {
  PageHeader,
  FilterRow,
  Table,
  ModalCard
} from '../index';

import { orders as initialOrders } from '../../assets/mock/orders';

const App = () => {

  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders);
  const isModalOpen = useSelector(state => state.view.isModalOpen);

  useEffect(() => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      dispatch(setOrders(initialOrders));
    }, Math.floor(Math.random() * 500)); 
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
    <Table openModal={ () => dispatch(setIsModalOpen(true)) } />
    {isModalOpen && (
      <ModalCard
        handleClickCloseModal={() => dispatch(setIsModalOpen(false))}
        handleClickcloseModalOutside={() => dispatch(setIsModalOpen(false))}
      />
    )} 
  </>
  );
}

export default App;