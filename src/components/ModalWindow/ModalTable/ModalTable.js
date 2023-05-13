import {
    ModalTableDataRows,
    ModalTableHeader,
    ModalTableFooter
} from '../../index';

import styles from './ModalTable.module.css';

export const ModalTable = ({order}) => {
    return (
        <div className={styles.modalTable}>
            <ModalTableHeader />
            <ModalTableDataRows productDetails={order.productDetails}/>
            <ModalTableFooter totalPrice={order.totalPrice}/>
        </div>
    )
}