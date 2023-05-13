import {useSelector} from 'react-redux';
import {
    Button,
    TitleText
} from '../../index';
import {
    BUTTON_SIZE as size,
    BUTTON_COLOR as color
} from '../../Button/Button';
import styles from './ModalHeader.module.css';
import {useEffect, useState} from "react";

export const ModalHeader = ({
    handleClickCloseModal,
    orderNumber
}) => {
    const orders = useSelector(state => state.orders);
    const checkedOrder = [...orders];
    useEffect(() => {
        checkedOrder.filter(item => item.checked)
    }, []);

    const [number, setNumber] = useState("");

    return (
        <div className={styles.modalHeader}>
            <TitleText
                title={`Заявка #${orderNumber ? orderNumber : ''}`}
                colorBlue={true} 
            />
            <Button
                size={size.large}
                color={color.blueText}
                icon={"XLarge"}
                iconColor={"#BAD8F5"}
                handleClick={ handleClickCloseModal }
            />
        </div>
    )
}