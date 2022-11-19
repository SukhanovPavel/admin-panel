import {
    Input,
    TableData,
    Button,
    ModalTable,
    ScrollCustom,
} from '../../index';
import {
    BUTTON_SIZE as size,
    BUTTON_COLOR as color
} from '../../Button/Button';
import styles from './ModalMain.module.css';


export const ModalMain = () => {
    return (
        <div className={styles.modalMain}>
            <ScrollCustom />
            <Input
                topText={"Дата и время заказа"}
                isLock={true}
                value={TableData[1].date}
            />
            <Input
                topText={"ФИО покупателя"}
                value={TableData[1].clientName}
            />
            <ModalTable />
            <Input 
                topText={"Уровень лояльности"}
                value={TableData[1].loyalty}
                isLock={true}    
            />
            <Input
                topText={"Статус заказа"}
                value={TableData[1].productStatus}
                children={
                    <Button
                        size={size.small}
                        color={color.blueText}
                        icon={"VArrow"}
                        iconColor={"#BAD8F5"}
                    />
                }    
            />
            <Input
                topText={"Код подтверждения"}
                value={"000"}
                isErr={true}
                children={
                    <Button
                        size={size.small}
                        color={color.blueText}
                        icon={"XMedium"}
                        iconColor={"#BAD8F5"}
                    />
                }    
            />
        </div>
    )
}