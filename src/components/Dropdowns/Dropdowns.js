import classnames from 'classnames';
import styles from './Dropdowns.module.css';


function Dropdowns({isOpen}) {
    const blockStyle = classnames({
        [styles.dropdownStyle]: isOpen,
        [styles.dropdownStyleNull]: !isOpen,
    })
    return (
        <div className={styles.dropdowns}>
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
            <div className={styles.dropdownStyle}>
                <ul>
                    <li>Новый</li>
                    <li className={styles.noLi}></li>
                    <li>Рассчет</li>
                    <li className={styles.noLi}></li>
                    <li id={styles.checkedLi}>Подтвержден</li>
                    <li className={styles.noLi}></li>
                    <li>Отложен</li>
                    <li className={styles.noLi}></li>
                    <li>Выполнен</li>
                    <li className={styles.noLi}></li>
                    <li>Отменен</li>
                </ul>
            </div>
            <div className={styles.dropdownStyleNone} ></div>
            <div className={styles.dropdownStyle}>
                <span className={styles.topText}>
                    Номер страницы
                </span>
                <input type="text" name="" id="" placeholder="Введите номер" className={styles.inputFormDrDwBlue}></input>
            </div>
            <div className={styles.dropdownStyle} id={styles.alignItems}>
                <span className={styles.topText}>
                    Удалить n записей
                </span>
                <div className={styles.buttonTwo}>
                    <button className={styles.textBlueSmall}>
                        Удалить
                    </button>
                </div>
                <div className={styles.buttonTwo}>
                    <button className={styles.backgroundBlueSmall}>
                        Отменить
                    </button>
                </div>
            </div>
            <div className={styles.dropdownStyle}>
                <span className={styles.topText}>
                    Выберете тему
                </span>
                <div className={styles.buttonOne}>
                    <button className={styles.textBlueSmall}>
                        <span className="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 
                                0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 
                                8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 
                                13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 
                                1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                            </svg>
                        </span>
                        Светлая
                    </button>
                </div>
                <div className={styles.buttonOne}>
                    <button className={styles.backgroundBlueSmall}>
                        <span className="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 
                                0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 
                                .278z"/>
                            </svg>
                        </span>
                        Темная
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dropdowns;