import { 
    TableHeader,
    TableBody,
    TableFooter
} from "../index"

import styles from "./Table.module.css";

export const Table = ({
    openModal
}) => {
    return (
        <div className={styles.tableContainer}>
            
            <TableHeader />

            <TableBody />

            <TableFooter openModal={openModal}/>
            
        </div>
    )
}