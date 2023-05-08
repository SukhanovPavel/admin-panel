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
import {deleteOrders} from "../../../store/slices/ordersSlice";


import styles from "./TableFooter.module.css";
import {useDispatch, useSelector} from "react-redux";

export const TableFooter = ({
    openModal
}) => {

    const orders = useSelector(state => state.orders);
    const forCount = [...orders];
    const count = forCount.filter(item => item.checked).length
    
    return (
        <div id="tableFooter" className={styles.tableFooter}>
            <div className={styles.footerButtons}>
                <div className={styles.selected}>
                    <span>Выбрано записей: {count}</span>
                </div>
                <Button
                    handleClick={openModal}
                    size={size.small}
                    icon={"Pencil"}
                    iconColor={"white"}
                    text={"Изменить статус"}
                />
                {/* { closeDD? <DeleteDD isOpen={closeDD} handleClick={openDD}/> : null } */}

                
                <DeleteButtonContainer className={styles.deleteButton} count={count}/>

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

export const DeleteButtonContainer = ({count}) => {
    const [ closeDD, openDD ] = useState(false);

    const dispatch = useDispatch();

    const title = `Удалить ${count} записи(ей)?`

    return (
        <div className={styles.deleteButton}>
            {/* { closeDD? <DeleteDD isOpen={closeDD} handleClick={openDD}/> : null } */}
            {closeDD &&
                <div className={styles.posAbsolute}>
                    <Dropdowns
                        title={title}
                    >
                        <Button
                            widthMarg
                            size={size.small}
                            color={buttonColor.blueText}
                            text={"Удалить"}
                            handleClick={() => {
                                dispatch(deleteOrders());
                                openDD(false);
                            }}
                        />
                        <Button
                            widthMarg
                            size={size.small}
                            handleClick={ () => openDD(false) }
                            text={"Отмена"}
                        />
                    </Dropdowns>
                </div> }
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