import {
    Checkbox,
    TableColumnNames,
    Button, SvgIcons
} from "../../index";
import {ReactComponent as V} from "../../svg/SVGfiles/v_arrow.svg";
import {
    BUTTON_SIZE as size,
    BUTTON_COLOR as color
} from "../../Button/Button";
import {checkAll} from "../../../store/slices/ordersSlice";
import {useDispatch} from "react-redux";
import styles from "./TableHeader.module.css";

export const TableHeader = ({handleFilterProduct}) => {

    const dispatch = useDispatch();

    return (
        <div className={styles.tableHeader} id="tableHeader">
            <div className={styles.columnCheck}>
                <TableColumnNames
                    title={<Checkbox handleCheckboxClick={() => dispatch(checkAll())} />}
                />
            </div>
            <div className={styles.columnNumber}>
                <TableColumnNames
                    title="#"
                />
            </div>
            <div className={styles.columnDate}>
                <TableColumnNames
                    handleClick={() => dispatch(handleFilterProduct("date"))}
                    title="Дата"
                    children={<V/>}
                />
            </div>
            <div className={styles.columnStatus}>
                <TableColumnNames
                    handleClick={() => dispatch(handleFilterProduct("productStatus"))}
                    title="Статус"
                    children={<V/>}
                />
            </div>
            <div className={styles.columnPos}>
                <TableColumnNames
                    handleClick={() => dispatch(handleFilterProduct("positions"))}
                    title="Позиций"
                    children={<V/>}
                />
            </div>
            <div className={styles.columnPrice}>
                <TableColumnNames
                    handleClick={() => dispatch(handleFilterProduct("totalPrice"))}
                    title="Сумма"
                    children={<V/>}
                />
            </div>
            <div className={styles.columnClientName}>
                <TableColumnNames
                    title="ФИО покупателя"
                />
            </div>
        </div>
    )
}