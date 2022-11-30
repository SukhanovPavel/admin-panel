// import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setOrderStatus } from '../../../../store/slices/filtersRowSlice';
import { 
    Input,
    Button,
    Dropdowns,
    Checkbox
} from "../../../index";

import styles from "./FilterRowBottomStatus.module.css";

import {
    BUTTON_SIZE as size,
    BUTTON_COLOR as color
} from "../../../Button/Button";



export const FilterRowBottomStatus = ({
    isOpen,
}) => {
    // const [listDD, setListDD] = useState(false);
    // const [checked1, setChecked1] = useState(false);
    // const [calculation, setcalculation] = useState(false);
    // const [confirmed, setconfirmed] = useState(false);
    // const [postponed, setpostponed] = useState(false);
    // const [completed, setcompleted] = useState(false);
    // const [cancelled, setcancelled] = useState(false);
    const newOrder = useSelector(state => state.filtersRow.orderStatus.new )
    const calculation = useSelector(state => state.filtersRow.orderStatus.calculation )
    const confirmed = useSelector(state => state.filtersRow.orderStatus.confirmed )
    const postponed = useSelector(state => state.filtersRow.orderStatus.postponed )
    const completed = useSelector(state => state.filtersRow.orderStatus.completed )
    const cancelled = useSelector(state => state.filtersRow.orderStatus.cancelled )

    const dispatch = useDispatch()
    
    const checkBoxArr = [{
            name: "Новый",
            size: size.small,
            color: newOrder? color.blueText : color.blackText,
            checked: newOrder,
            handleClick: () => dispatch(setOrderStatus.new())
        },
        {
            name: "Рассчет",
            size: size.small,
            color: calculation? color.blueText : color.blackText,
            checked: calculation,
            handleClick: () => dispatch(setOrderStatus.calculation())
        },
        {
            name: "Подтвержден",
            size: size.small,
            color: confirmed? color.blueText : color.blackText,
            checked: confirmed,
            handleClick: () => dispatch(setOrderStatus.confirmed())
        },
        {
            name: "Отложен",
            size: size.small,
            color: postponed? color.blueText : color.blackText,
            checked: postponed,
            handleClick: () => dispatch(setOrderStatus.postponed())
        },
        {
            name: "Выполнен",
            size: size.small,
            color: completed? color.blueText : color.blackText,
            checked: completed,
            handleClick: () => dispatch(setOrderStatus.completed())
        },
        {
            name: "Отменен",
            size: size.small,
            color: cancelled? color.blueText : color.blackText,
            checked: cancelled,
            handleClick: () => dispatch(setOrderStatus.cancelled())
        },
    ]
    return (
        <div className={styles.inputStatus}>
            <Input
             onChange={() => {}}
            topText={"Статус заказа"}
            value={"Любой"}
            // isButton6={true}
            children={
                <>
                <Button
                color={color.blueText}
                size={size.small}
                handleClick={() => setListDD(!listDD)}
                icon={"VArrow"}
                iconColor={"#BAD8F5"}
                />
                {listDD ?
                    <div className={styles.posAbsolute}>
                        <Dropdowns
                            addCheckbox={true}
                            arr={checkBoxArr}
                            children={<Checkbox />}
                        /> 
                    </div>: null } </>
            }
            />
            { }
        </div>
  );
}