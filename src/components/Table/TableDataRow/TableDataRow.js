import { Check } from "../../index";

import styles from "./TableDataRow.module.css";

export const TableDataRow = ({
    checked,
    number,
    date,
    productStatus,
    positions,
    price,
    clientName
}) => {
    return (
        <div className={styles.tableDataRow}>
            <div className={styles.check}><Check checked={checked}/></div>
            <div className={styles.orderNumber}>{number}</div>
            <div className={styles.orderDate}>{date}</div>
            <div className={styles.orderStatus}>{productStatus}</div>
            <div className={styles.numOfProducts}>{positions}</div>
            <div className={styles.orderPrice}>{price}</div>
            <div className={styles.clientName}>{clientName}</div>
        </div>
    )
}