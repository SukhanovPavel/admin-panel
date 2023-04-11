import cx from 'classnames';
import {
    Checkbox,
    Button
} from "../../../index";
import {
    BUTTON_SIZE as size,
    BUTTON_COLOR as buttonColor
} from '../../../Button/Button';

import styles from "./TableDataRow.module.css";

export const TableDataRow = ({
    checked,
    number,
    date,
    time,
    icon="Dot",
    color="#FF8C56",
    productStatus,
    positions,
    totalPrice,
    clientName,
    textGreen,
    opacity
}) => {

    const rowStyle = cx(styles.tableDataRow, {
        [styles.silver]: checked
    })
    return (
        <div className={rowStyle} id="tableRow">
            <div className={styles.check}><Checkbox checked={checked}/></div>
            <div className={styles.orderNumber}>{number}</div>
            <div className={styles.orderDate}>{date}, {time}</div>
            <div className={styles.orderStatus}>
                {/* <SvgIcons icon={icon} color={color}/>
                {productStatus} */}
                <Button
                    opacity={opacity}
                    size={size.large}
                    color={buttonColor.blackText}
                    icon={icon}
                    iconColor={color}
                    textGreen={textGreen}
                    text={productStatus}
                />
            </div>
            <div className={styles.numOfProducts}>{positions}</div>
            <div className={styles.orderPrice}>{totalPrice}</div>
            <div className={styles.clientName}>{clientName}</div>
        </div>
    )
}