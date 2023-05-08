
import styles from './ModalTableFooter.module.css';
import {useSelector} from "react-redux";
// const orders = [{
//     totalPrice: 222
// }]
export const ModalTableFooter = () => {

    const orders = useSelector(state => state.orders);

    return (
        <div className={styles.modalTableFooter}>
            <div className={styles.footerText}>Итоговая сумма:</div>
            <div className={styles.footerTextPrice}>{orders[1].totalPrice }</div>
        </div>
    )
}