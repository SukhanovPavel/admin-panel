
import styles from "./ModalDataRow.module.css";

export const ModalDataRow = ({
    article,
    productName,
    price
}) => {
    return (
        <div className={styles.modalDataRow}>
            <div className={styles.article}>
                {article}
            </div>
            <div className={styles.productName}>
                {productName}
            </div>
            <div className={styles.price}>
                {price}
            </div>
        </div>
    )
}