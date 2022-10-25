import { 
Buttons,
SearchForm
} from '../../index';

import styles from './FilterRowTop.module.css';

export const FilterRowTop = () => {
    return (
        <div className={styles.header}>
            <div className={styles.topInpContainer}>
                <SearchForm />
                <Buttons isButton1={true} text={'Фильтры'} 
                    icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4H4V5.5L7 8.5V12L9 13V8.5L12 5.5V4Z" fill="white"/>
                    </svg>}/>
                <Buttons isButton5={true} text={'Сбросить фильтры'}  />
            </div>
            <Buttons isButton4={true} text={'Загрузка'} 
                icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.50251 7.5V8.5C2.50251 10.75 4.75251 13.5 8.00251 13.5C10 13.5 11.6187 12.5 12.6 11" stroke="#459DF5"/>
                <path d="M13.5 8.5V7.5C13.5 5.25 11.25 2.5 7.99997 2.5C6 2.5 4.38135 3.5 3.4 5" stroke="#459DF5"/>
                <path d="M4.5 9.5L2.50254 7.5L0.752533 9.75" stroke="#459DF5"/>
                <path d="M11.5 6.5L13.5 8.5L15.25 6.25" stroke="#459DF5"/>
                </svg>} />
        </div>
    )
}