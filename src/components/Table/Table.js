import { 
    TableHeader,
    TableBody,
    TableFooter
} from "../index";
import {checkOrderRow} from "../../store/slices/ordersSlice";

import styles from "./Table.module.css";
import {useDispatch} from "react-redux";

export const Table = ({
    openModal,
    orders,
    handleFilterProduct,
    // checkOrder
}) => {

    const dispatch = useDispatch();

    const checkOrder = () => dispatch(checkOrderRow);

    return (
        <div className={styles.tableContainer}>
            
            <TableHeader handleFilterProduct={handleFilterProduct} />

            <TableBody orders={orders} checkOrder={checkOrder}/>

            <TableFooter openModal={openModal}/>
            
        </div>
    )
}