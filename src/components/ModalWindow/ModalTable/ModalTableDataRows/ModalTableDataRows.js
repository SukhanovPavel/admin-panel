import {useSelector} from "react-redux";
import {
    ModalDataRow,
} from '../../../index';

// const orders = [{
//     productDetails: []
// }];

export const ModalTableDataRows = ({productDetails}) => {

    // const orders = useSelector(state => state.orders);

    return productDetails.map(i =>
        <ModalDataRow
            article={i.article}
            productName={i.productName}
            price={i.price}
        />)
}