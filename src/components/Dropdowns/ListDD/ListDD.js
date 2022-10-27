import classnames from 'classnames';

import styles from './ListDD.module.css';

export const ListDD = ({isOpen}) => {
    const blockStyle = classnames({
        [styles.dropdownStyle]: isOpen,
        [styles.dropdownStyleNull]: !isOpen,
    })
    return (
        <div className={blockStyle}>
            <ul>
                <li><input type="checkbox" className={styles.dropdownCheck} name="" id=""></input>Новый</li>
                <li className={styles.noLi}></li>
                <li><input type="checkbox" className={styles.dropdownCheck} name="" id=""></input>Рассчет</li>
                <li className={styles.noLi}></li>
                <li><input type="checkbox" className={styles.dropdownCheck} checked="checked" name="" id=""></input>Подтвержден</li>
                <li className={styles.noLi}></li>
                <li><input type="checkbox" className={styles.dropdownCheck} name="" id=""></input>Отложен</li>
                <li className={styles.noLi}></li>
                <li><input type="checkbox" className={styles.dropdownCheck} name="" id=""></input>Выполнен</li>
                <li className={styles.noLi}></li>
                <li><input type="checkbox" className={styles.dropdownCheck} name="" id=""></input>Отменен</li>
            </ul>
        </div>
    )
}