import { useSelector } from 'react-redux';
import {
    TableDataRow
} from "../../index"

import styles from "./TableBody.module.css";

export const TableBody = ({orders, checkOrder}) => {

    const tableRow = orders.map(i => <TableDataRow
        key={i.id}
        checkOrder={checkOrder}
        checked={i.checked}
        number={i.number}
        date={i.date}
        time={i.time}
        productStatus={i.productStatus}
        positions={i.positions}
        totalPrice={i.totalPrice}
        clientName={i.clientName}
        color={i.color}
        icon={i.icon}
        textGreen={i.textGreen}
        opacity={i.opacity}
        id={i.id}
    />
    );
    return (
        <div className={styles.tableBody}>
            {tableRow}
        </div>
    )
}