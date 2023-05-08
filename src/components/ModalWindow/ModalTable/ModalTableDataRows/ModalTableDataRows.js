import {useSelector} from "react-redux";
import {
    ModalDataRow,
} from '../../../index';

// const orders = [{
//     productDetails: []
// }];

export const ModalTableDataRows = () => {

    const orders = useSelector(state => state.orders);

    return orders[1].productDetails.map(i =>
        <ModalDataRow
            article={i.article}
            productName={i.productName}
            price={i.price}
        />)
}