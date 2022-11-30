import {
    ModalDataRow,
} from '../../../index';
import { orders } from '../../../../assets/mock/orders';

export const ModalTableDataRows = () => orders[1].productDetails.map(i => <ModalDataRow
        article={i.article}
        productName={i.productName}
        price={i.price}
    />)