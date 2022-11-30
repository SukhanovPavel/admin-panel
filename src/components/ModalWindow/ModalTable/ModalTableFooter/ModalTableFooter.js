
import styles from './ModalTableFooter.module.css';

export const ModalTableFooter = () => {
    return (
        <div className={styles.modalTableFooter}>
            <div className={styles.footerText}>Итоговая сумма:</div>
            <div className={styles.footerTextPrice}>1000</div>
        </div>
    )
}