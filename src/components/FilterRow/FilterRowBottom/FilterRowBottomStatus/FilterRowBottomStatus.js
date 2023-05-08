import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { 
    Input,
    Button,
    Dropdowns,
    Checkbox
} from "../../../index";
import {
    BUTTON_SIZE as size,
    BUTTON_COLOR as color, BUTTON_COLOR
} from "../../../Button/Button";

import styles from "./FilterRowBottomStatus.module.css";

export const FilterRowBottomStatus = ({
    orderStatusValue,
    setOrderStatusValue
}) => {
    const [listDD, setListDD] = useState(false);

    const dispatch = useDispatch();

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
                <Checkbox checked={item.checked}/>
                <div className={item.checked && styles.colorBlue}>{item.value}</div>
            </div>
    );

    useEffect(() => {
        const res = dropDownMap.find(i => i.checked ? i.value : null)
        dispatch(setOrderStatusValue(res?.value ? res.value : ""));
    }, dropDownMap);

    return (
        <div className={styles.inputStatus}>
            <Input
                disabled
                onChange={() => {}}
                topText={"Статус заказа"}
                value={orderStatusValue ? orderStatusValue : "Любой"}
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
        </div>
  );
}