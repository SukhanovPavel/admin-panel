
import styles from './ModalTableHeader.module.css';

export const ModalTableHeader = () => {
    return (
        <div className={styles.modalTableHeader}>
            <div className={styles.article}>Артикул</div>
            <div className={styles.product}>Наименование</div>
            <div className={styles.price}>Цена</div>
        </div>
    )
}