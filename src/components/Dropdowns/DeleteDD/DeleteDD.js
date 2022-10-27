import classnames from 'classnames';
import { Buttons } from '../../index';

import styles from './DeleteDD.module.css';

export const DeleteDD = ({isOpen, handleClick}) => {
    const blockStyle = classnames({
        [styles.dropdownStyle]: isOpen,
        [styles.dropdownStyleNull]: !isOpen,
    })
    return (
        <div className={blockStyle}>
            <span className={styles.topText}>
                Удалить n записей
            </span>
            <div className={styles.button}>
                <Buttons 
                    isButton5={true}
                    text={"Удалить"}
                />
            </div>
            <div className={styles.button}>
                <Buttons 
                    isButton11={true}
                    text={"Отменить"}
                    handleClick={ () => handleClick(false) }
                />
            </div>
        </div>
    )
}