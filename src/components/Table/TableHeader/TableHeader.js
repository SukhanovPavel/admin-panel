import {
    Checkbox,
    TableColumnNames,
    Button, SvgIcons
} from "../../index"
import {
    BUTTON_SIZE as size,
    BUTTON_COLOR as color
} from "../../Button/Button";
import styles from "./TableHeader.module.css";

export const TableHeader = () => {

    return (
        <div className={styles.tableHeader} id="tableHeader">
            <div className={styles.columnCheck}>
                <TableColumnNames
                    span={<Checkbox />}
                />
            </div>
            <div className={styles.columnNumber}>
                <TableColumnNames
                    span="#"
                />
            </div>
            <div className={styles.columnDate}>
                <TableColumnNames
                    span="Дата"
                    children={
                    <Button
                        icon={"VArrow"}
                        size={size.small}
                        // color={color.blueText}
                        iconColor={"white"}
                    />}
                />
            </div>
            <div className={styles.columnStatus}>
                <TableColumnNames
                    span={"Статус"}
                    children={
                    <Button
                        icon={"VArrow"}
                        size={size.small}
                        // color={color.blueText}
                        iconColor={"white"}
                    />}
                />
            </div>
            <div className={styles.columnPos}>
                <TableColumnNames
                    span={"Позиций"}
                    children={<Button
                        icon={"VArrow"}
                        size={size.small}
                        // color={color.blueText}
                        // iconColor={"white"}
                    />}
                />
            </div>
            <div className={styles.columnPrice}>
                <TableColumnNames
                    span={"Сумма"}
                    children={<Button
                        icon={"VArrow"}
                        size={size.small}
                        // color={color.blueText}
                        iconColor={"white"}
                    />}
                />
            </div>
            <div className={styles.columnClientName}>
                <TableColumnNames
                    span={"ФИО покупателя"}
                />
            </div>
        </div>
    )
}