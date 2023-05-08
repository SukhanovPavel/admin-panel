import cx from 'classnames';
import {
    Checkbox,
    Button
} from "../../../index";
import {checkOrderRow} from "../../../../store/slices/ordersSlice";
import {ReactComponent as Dot} from "../../../svg/SVGfiles/dot.svg";
import {ReactComponent as Abort} from "../../../svg/SVGfiles/abort.svg";
import {ReactComponent as Checkmark} from "../../../svg/SVGfiles/checkmark.svg";

import styles from "./TableDataRow.module.css";
import {useDispatch} from "react-redux";

export const TableDataRow = ({
     checkOrder,
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
    id
}) => {

    const dispatch = useDispatch();

    let statusIcon;
    switch (productStatus) {
        case "Выполнен":
            statusIcon = <Checkmark />;
            break;
        case "Отменен":
            statusIcon = <Abort />;
            break;
        default:
            statusIcon = <Dot />;
    }

    const orderStatusStyle = cx(styles.orderStatus, {
        [styles.greenStatus]: productStatus === "Выполнен",
        [styles.grayStatus]: productStatus === "Отменен"
    });

    const statusIconStyle = cx({
        [styles.orangeIcon]: productStatus === "Новый" || productStatus === "Отложен",
        [styles.blueIcon]: productStatus === "Рассчет"
    })

    const rowStyle = cx(styles.tableDataRow, {
        [styles.silver]: checked
    })
    return (
        <div className={rowStyle} key={id}>
            <div className={styles.check}>
                <Checkbox
                    handleCheckboxClick={() => dispatch(checkOrderRow(id))}
                    checked={checked}
                />
            </div>
            <div className={styles.orderNumber}>{number}</div>
            <div className={styles.orderDate}>{date}, {time}</div>
            <div className={orderStatusStyle}>
                <div className={statusIconStyle}>{statusIcon}</div> {productStatus}
            </div>
            <div className={styles.numOfProducts}>{positions}</div>
            <div className={styles.orderPrice}>{totalPrice === "0" ? "-" : `${totalPrice} ₽`}</div>
            <div className={styles.clientName}>{clientName}</div>
        </div>
    )
}