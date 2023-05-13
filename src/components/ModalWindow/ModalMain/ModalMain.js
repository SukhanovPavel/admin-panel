import { useSelector } from 'react-redux';
import {
    Input,
    Button,
    ModalTable, FilterRowBottomStatus, Dropdowns, Checkbox,
    // ScrollCustom,
} from '../../index';
import {
    BUTTON_SIZE as size,
    BUTTON_COLOR as color
} from '../../Button/Button';
import styles from './ModalMain.module.css';
import {useState} from "react";


export const ModalMain = ({
    order,
    orderStatusValue
    }) => {

    const [listDD, setListDD] = useState(false);

    const [dropDownMap, setDropDownMap] = useState([
        {value: "Новый", checked: false},
        {value: "Рассчет", checked: false},
        {value: "Подтвержден", checked: false},
        {value : "Отложен", checked: false},
        {value: "Выполнен", checked: false},
        {value: "Отменен", checked: false},
    ]);

    const DDChild = dropDownMap.map(item =>
        <div
            onClick={() => {
                const mapped = dropDownMap.map(elem =>
                    elem.value === item.value ? {...elem, checked: true} : {...elem, checked: false})
                setDropDownMap(mapped);
                setListDD(!listDD);
            }}
            key={item.value}
            className={styles.flexStatus}
        >
            {/*<Checkbox checked={item.checked}/>*/}
            <div className={item.checked && styles.colorBlue}>{item.value}</div>
        </div>
    );

    // const orders = useSelector(state => state.orders);
    return (
        <div className={styles.modalMain}>
            {/*<ScrollCustom />*/}
            <Input
                topText={"Дата и время заказа"}
                isLock={true}
                value={order.date}
            />
            <Input
                topText={"ФИО покупателя"}
                value={order.clientName}
            />
            <ModalTable order={order}/>
            <Input 
                topText={"Уровень лояльности"}
                value={order.loyalty}
                isLock={true}    
            />
            {/*<Input*/}
            {/*    topText={"Статус заказа"}*/}
            {/*    value={order.productStatus}*/}
            {/*    children={*/}
            {/*        <Button*/}
            {/*            size={size.small}*/}
            {/*            color={color.blueText}*/}
            {/*            icon={"VArrow"}*/}
            {/*            iconColor={"#BAD8F5"}*/}
            {/*        />*/}
            {/*    }    */}
            {/*/>*/}

            <Input
                disabled
                onChange={() => {}}
                topText={"Статус заказа"}
                value={order.orderStatus}
            >
                <Button
                    color={color.blueText}
                    size={size.small}
                    handleClick={() => setListDD(!listDD)}
                    icon={"VArrow"}
                    iconColor={"#BAD8F5"}
                />
            </Input>
            {listDD && <div className={styles.posAbsolute}>
                <Dropdowns>
                    {DDChild}
                </Dropdowns>
            </div>}

            <Input
                topText={"Код подтверждения"}
                value={"000"}
                isErr={true}
                children={
                    <Button
                        size={size.small}
                        color={color.blueText}
                        icon={"XMedium"}
                        iconColor={"#BAD8F5"}
                    />
                }    
            />
        </div>
    )
}