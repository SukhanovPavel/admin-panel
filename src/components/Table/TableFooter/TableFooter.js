import { useState } from "react";
import {
    Buttons,
    DeleteDD
} from "../../index"

import styles from "./TableFooter.module.css";

export const TableFooter = () => {
    const [ deleteDD, openDD ] = useState(false);
    return (
        <div className={styles.tableFooter}>
            <div className={styles.footerButtons}>
                <div className={styles.selected}>
                    <span>Выбрано записей: 5</span>
                </div>
                <div className={styles.changeStatus}>
                    <Buttons 
                        isButton10={true}
                        icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 14.5H15" stroke="white"/>
                        <path d="M5 13L1.5 14.5L3 11M5 13L3 11M5 13L12 6M3 11L10 4M11 3L12.5 1.5L14.5 3.5L13 5M11 3L13 5M11 3L10 4M13 5L12 6M12 6L10 4" stroke="white"/>
                        </svg>}
                        text={"Изменить статус"}/>
                </div>
                <div className={styles.deleteButton}>
                    <DeleteDD isOpen={deleteDD} handleClick={openDD}/>
                    <Buttons
                        isButton10={true}
                        handleClick={ () => openDD(true) }
                        isRed={true}
                        icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5" stroke="white" stroke-linecap="round"/>
                        <path d="M6.5 6V12M9.5 6V12" stroke="white" stroke-linecap="round"/>
                        </svg>}
                        text={"Удалить"}/>
                        
                </div>
            </div>
            <div className={styles.pagination}>
                <div className={styles.paginationButtons}>
                    <Buttons isButton11={true} text={"1"}/>
                    <Buttons isButton5={true} text={"2"}/>
                    <Buttons isButton5={true} text={"3"}/>
                    <span>...</span>
                    <Buttons isButton5={true} text={"18"}/>
                </div>
                <div className={styles.paginationNumber}>
                    <Buttons 
                        isButton5={true} 
                        text={"#"}
                    />
                </div>
            </div>
        </div>
    )
}