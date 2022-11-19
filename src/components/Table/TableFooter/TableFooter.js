import { useState } from "react";
import {
    Button,
    // DeleteDD,
    Dropdowns
} from "../../index";
import {
    BUTTON_SIZE as size,
    BUTTON_COLOR as buttonColor
} from "../../Button/Button";
import styles from "./TableFooter.module.css";

export const TableFooter = ({
    openModal
}) => {
    
    return (
        <div className={styles.tableFooter}>
            <div className={styles.footerButtons}>
                <div className={styles.selected}>
                    <span>Выбрано записей: 5</span>
                </div>
                <Button
                    handleClick={openModal}
                    size={size.small}
                    icon={"Pencil"}
                    iconColor={"white"}
                    text={"Изменить статус"}
                />
                {/* { closeDD? <DeleteDD isOpen={closeDD} handleClick={openDD}/> : null } */}

                
                <DeleteButtonContainer className={styles.deleteButton}/>

            </div>
            <div className={styles.pagination}>
                <div className={styles.paginationButtons}>
                    <Button
                        size={size.small}
                        text={"1"}
                    />
                    <Button
                        size={size.small}
                        color={buttonColor.blueText}
                        text={"2"}
                    />
                    <Button
                        size={size.small}
                        color={buttonColor.blueText}
                        text={"3"}
                    />
                    <span>...</span>
                    <Button
                        size={size.small}
                        color={buttonColor.blueText}
                        text={"18"}
                    />
                </div>
                <div className={styles.paginationNumber}>
                    <Button
                        size={size.small}
                        color={buttonColor.blueText}
                        text={"#"}
                    />
                </div>
            </div>
        </div>
    )
}

export const DeleteButtonContainer = () => {
    const [ closeDD, openDD ] = useState(false);
    const buttonsDD = [
        {
            name: "Удалить",
            size: size.small,
            color: buttonColor.blueText
        },
        {
            name: "Отмена",
            size: size.small,
            handleClick: ()  => openDD(false)
        },
    ]
    return (
        <div className={styles.deleteButton}>
            {/* { closeDD? <DeleteDD isOpen={closeDD} handleClick={openDD}/> : null } */}
            {closeDD?  <div className={styles.posAbsolute}>
                <Dropdowns 
                    title={'Удалить n записей'}
                    arr={buttonsDD}
                /> 
                </div> : null }
            <Button
                size={size.small}
                color={buttonColor.red}
                handleClick={ () => openDD(true) }
                icon={"Bin"}
                iconColor={"white"}
                text={"Удалить"}
            />
            
        </div>
    )
}