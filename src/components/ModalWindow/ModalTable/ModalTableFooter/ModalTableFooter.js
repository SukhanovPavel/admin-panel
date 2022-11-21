
import styles from './ModalTableFooter.module.css';
const orders = [{
    totalPrice: 222
}]
export const ModalTableFooter = () => {
    return (
        <div className={styles.modalTableFooter}>
            <div className={styles.footerText}>Итоговая сумма:</div>
            <div className={styles.footerTextPrice}>{orders[1].totalPrice }</div>
        </div>
    )
}