import { 
    Check,
    TableColumnNames,
    Buttons
} from "../../index"

import styles from "./TableHeader.module.css";

export const TableHeader = () => {

    const childButton = <Buttons 
        isButton6={true} 
        icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" fill="white"/></svg>} 
    />

    return (
        <div className={styles.tableHeader}>
            <div className={styles.columnCheck}>
                <TableColumnNames span={<Check />} />
            </div>
            <div className={styles.columnNumber}>
                <TableColumnNames span={"#"}/>
            </div>
            <div className={styles.columnDate}>
                <TableColumnNames span={"Дата"} children={childButton}/>
            </div>
            <div className={styles.columnStatus}>
                <TableColumnNames span={"Статус"} children={childButton}/>
            </div>
            <div className={styles.columnPos}>
                <TableColumnNames span={"Позиций"} children={childButton}/>
            </div>
            <div className={styles.columnPrice}>
                <TableColumnNames span={"Сумма"} children={childButton}/>
            </div>
            <div className={styles.columnClientName}>
                <TableColumnNames span={"ФИО покупателя"}/>
            </div>
        </div>
    )
}