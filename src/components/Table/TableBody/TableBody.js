import {
    TableDataRow,
    TableData
} from "../../index"

import styles from "./TableBody.module.css";

export const TableBody = () => {
    const tableRow = TableData.map(i => <TableDataRow  
        checked={i.checked}
        number={i.number}
        date={i.date}
        productStatus={i.productStatus}
        positions={i.positions}
        price={i.price}
        clientName={i.clientName} />
    );
    return (
        <div className={styles.tableBody}>
            <div className={styles.scroll}>
                <div className={styles.scrollBody}></div>
                <div className={styles.scrollRoad}></div>
            </div>
            {tableRow}
        </div>
    )
}