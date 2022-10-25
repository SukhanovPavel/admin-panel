import { 
    TableHeader,
    TableDataRow,
    TableData
} from "../index"

import styles from "./Table.module.css";

export const Table = () => {
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
        <div className={styles.tableContainer}>
            <TableHeader />

            <div className={styles.tableBody}>
                <div className={styles.scroll}>
                    <div className={styles.scrollBody}></div>
                    <div className={styles.scrollRoad}></div>
                </div>
                {tableRow}
            </div>

            <div className={styles.tableFooter}></div>
        </div>
    )
}