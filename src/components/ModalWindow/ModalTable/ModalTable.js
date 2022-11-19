import {
    ModalTableDataRows,
    ModalTableHeader,
    ModalTableFooter
} from '../../index';

import styles from './ModalTable.module.css';

export const ModalTable = () => {
    return (
        <div className={styles.modalTable}>
            <ModalTableHeader />
            <ModalTableDataRows />
            <ModalTableFooter />
        </div>
    )
}