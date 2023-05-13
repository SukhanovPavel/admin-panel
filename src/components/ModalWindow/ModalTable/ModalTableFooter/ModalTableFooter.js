
import styles from './ModalTableFooter.module.css';
import {useSelector} from "react-redux";
// const orders = [{
//     totalPrice: 222
// }]
export const ModalTableFooter = ({totalPrice}) => {

    // const orders = useSelector(state => state.orders);

    return (
        <div className={styles.modalTableFooter}>
            <div className={styles.footerText}>Итоговая сумма:</div>
            <div className={styles.footerTextPrice}>{totalPrice }</div>
        </div>
    )
}