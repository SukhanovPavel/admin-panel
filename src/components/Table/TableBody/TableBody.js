import { useSelector } from 'react-redux';
import {
    TableDataRow,
    ScrollCustom
} from "../../index"

import styles from "./TableBody.module.css";

export const TableBody = () => {
    const orders = useSelector(state => state.orders);

    const tableRow = orders.map((i, index) => <TableDataRow
        key={index}
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
    />
    );
    return (
        <div className={styles.tableBody}>
            <ScrollCustom />
            {tableRow}
        </div>
    )
}