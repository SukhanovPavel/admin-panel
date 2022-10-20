

import styles from './FilterRow.module.css';

export const FilterRow = () =>{
    return (
        <>
        <div className={styles.header}>
            <div className={styles.topInpContainer}>
                <div className={styles.inputFormborderBlue} id={styles.searchForm}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5" stroke="#459DF5"/>
                    </svg>
                    <input type="text" name="searchFocus" id="" className={styles.inp} placeholder="Номер заказа или ФИО"></input>
                </div>
                <button className={styles.backgroundBlueBig}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4H4V5.5L7 8.5V12L9 13V8.5L12 5.5V4Z" fill="white"/>
                    </svg>
                    Фильтры
                </button>
                <button className={styles.button}>Сбросить фильтры</button>
            </div>
            <button className={styles.button}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.50251 7.5V8.5C2.50251 10.75 4.75251 13.5 8.00251 13.5C10 13.5 11.6187 12.5 12.6 11" stroke="#459DF5"/>
                <path d="M13.5 8.5V7.5C13.5 5.25 11.25 2.5 7.99997 2.5C6 2.5 4.38135 3.5 3.4 5" stroke="#459DF5"/>
                <path d="M4.5 9.5L2.50254 7.5L0.752533 9.75" stroke="#459DF5"/>
                <path d="M11.5 6.5L13.5 8.5L15.25 6.25" stroke="#459DF5"/>
                </svg>
                Загрузка
            </button>
        </div>

        <div></div>
        </>
    )
}