import { 
    TableHeader,
    TableBody,
    TableFooter
} from "../index"

import styles from "./Table.module.css";

export const Table = () => {
    return (
        <div className={styles.tableContainer}>
            
            <TableHeader />

            <TableBody />

            <TableFooter />
            
        </div>
    )
}