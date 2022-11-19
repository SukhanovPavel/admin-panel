import {
    TableData
} from '../../../index';

import styles from './ModalTableFooter.module.css';

export const ModalTableFooter = () => {
    return (
        <div className={styles.modalTableFooter}>
            <div className={styles.footerText}>Итоговая сумма:</div>
            <div className={styles.footerTextPrice}>{TableData[1].totalPrice }</div>
        </div>
    )
}