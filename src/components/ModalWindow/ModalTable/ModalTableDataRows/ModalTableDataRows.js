import {
    TableData,
    ModalDataRow,
} from '../../../index';

export const ModalTableDataRows = () => TableData[1].productDetails.map(i => <ModalDataRow
        article={i.article}
        productName={i.productName}
        price={i.price}
    />)