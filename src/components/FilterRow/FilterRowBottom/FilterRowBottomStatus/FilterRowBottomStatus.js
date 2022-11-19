import { useState } from "react";
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
    const [listDD, setListDD] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const checkBoxArr = [{
        name: "Новый",
        size: size.small,
        color: checked1? color.blueText : color.blackText,
        checked: checked1,
        handleClick: () => setChecked1(!checked1)
    },
    {
        name: "Рассчет",
        size: size.small,
        color: checked2? color.blueText : color.blackText,
        checked: checked2,
        handleClick: () => setChecked2(!checked2)
    },
    {
        name: "Подтвержден",
        size: size.small,
        color: checked3? color.blueText : color.blackText,
        checked: checked3,
        handleClick: () => setChecked3(!checked3)
    },
    {
        name: "Отложен",
        size: size.small,
        color: checked4? color.blueText : color.blackText,
        checked: checked4,
        handleClick: () => setChecked4(!checked4)
    },
    {
        name: "Выполнен",
        size: size.small,
        color: checked5? color.blueText : color.blackText,
        checked: checked5,
        handleClick: () => setChecked5(!checked5)
    },
    {
        name: "Отменен",
        size: size.small,
        color: checked6? color.blueText : color.blackText,
        checked: checked6,
        handleClick: () => setChecked6(!checked6)
    },
]
    return (
        <div className={styles.inputStatus}>
            <Input
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