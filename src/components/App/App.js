import { useState } from 'react';
import {
  PageHeader,
  FilterRow,
  Table,
  ModalCard
} from '../index';


const App = () => {
  const [modalState, setModalState] = useState(false, );
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