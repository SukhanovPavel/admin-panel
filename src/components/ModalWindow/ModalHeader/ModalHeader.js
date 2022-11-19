import {
    TableData,
    Button,
    TitleText
} from '../../index';
import {
    BUTTON_SIZE as size,
    BUTTON_COLOR as color
} from '../../Button/Button';
import styles from './ModalHeader.module.css';

export const ModalHeader = ({
    handleClickCloseModal
}) => {
    return (
        <div className={styles.modalHeader}>
            <TitleText
                title={`Заявка #${TableData[1].number}`} 
                colorBlue={true} 
            />
            <Button
                size={size.large}
                color={color.blueText}
                icon={"XLarge"}
                iconColor={"#BAD8F5"}
                handleClick={ handleClickCloseModal }
            />
        </div>
    )
}