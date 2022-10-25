import { 
    InputForm,
    Buttons,
    ListDD,
} from '../../index';

import styles from "./FilterRowBottom.module.css";

export const FilterRowBottom = () => {
    let dateI = new Date();
    return (
        <div className={styles.filterBottom}>
            <div className={styles.inputDate} >
                <InputForm
                    span={"с"}
                    topText={"Дата оформления"}  
                    value={`${dateI.getDate()}.${dateI.getMonth() > 9 ? dateI.getMonth(): '0' + dateI.getMonth()}.${dateI.getFullYear()}`}
                    children={<Buttons isButton6={true} icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" stroke="#BAD8F5"/>
                    </svg>} />} 
                />
                <InputForm 
                    span={"по"}  
                    placeholder={"dd.mm.yyyy"}
                />
            </div>
            <div className={styles.inputStatus}>
                <InputForm 
                    topText={"Статус заказа"}
                    value={"Любой"}
                    isButton6={true}
                    children={<Buttons isButton6={true} icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" fill="#BAD8F5"/>
                    </svg>} />}
                />
                <ListDD isOpen={false}/>
            </div>
            <div className={styles.inputPrice}>
                <InputForm 
                    topText={"Сумма заказа"}
                    span={"от"}  
                    value={"5000"}
                    children={<Buttons isButton6={true} icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" stroke="#BAD8F5"/>
                    </svg>} />}
                />
                <InputForm 
                    span={"до"} 
                    placeholder={"₽"}
                />
            </div>
            <div className={styles.inputButton}>
                <Buttons isButton5={true} text={'Применить'}  />
            </div>
        </div>
    )
}