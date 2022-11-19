// import cx from 'classnames';
import {
    ModalHeader,
    ModalMain,
    Button
} from '../index';
import {
    BUTTON_SIZE as size,
} from '../Button/Button';
import styles from './ModalCard.module.css';

export const ModalCard = ({
    // getModal,
    handleClickcloseModalOutside,
    handleClickCloseModal
}) => {
    // const modalWindow = cx({
    //     [styles.modal]: true,
    //     [styles.modalNone]: !getModal
    // })
    return (
        <div className={styles.modal} onClick={ e => (e.currentTarget === e.target) && handleClickcloseModalOutside() }>
            <div className={styles._}>
                <ModalHeader handleClickCloseModal={handleClickCloseModal}/>

                <ModalMain />

                <div className={styles.modalFooter}>
                    <div className={styles.loadIndicator}>Ошибка или индикатор загрузки</div>
                    <div className={styles.saveButton}>
                        <Button
                            size={size.large}
                            text={"Сохранить"}
                            icon={"Checkmark"}
                            iconColor={"#FFFFFF"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}