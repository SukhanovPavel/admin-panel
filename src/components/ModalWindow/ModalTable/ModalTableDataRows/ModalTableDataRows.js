import {
    ModalDataRow,
} from '../../../index';
const orders = [{
    productDetails: []
}];
export const ModalTableDataRows = () => orders[1].productDetails.map(i => <ModalDataRow
        article={i.article}
        productName={i.productName}
        price={i.price}
    />)