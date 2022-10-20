import cx from 'classnames';
import styles from './Input.module.css';
import { InputForm } from './InputForm/InputForm';

function Input({isErr, isLock}) {
    // const inputStyles = cx({
    //     [styles.inputForm]: true,
    //     [styles.inputFormError]: isErr,
    //     [styles.inputFormLock]: isLock,
    // })
    // const buttonX = cx({
    //     [styles.x]: isErr,
    //     [styles.xNone]: !isErr,
    // })
    // const locked = cx({
    //     [styles.lock]: isLock,
    //     [styles.lockNone]: !isLock,
    // })
    return (
        // <div className={styles.input}>
        //     <div className={styles.wrapper}>
        //         <div type="text" className={styles.topText}>Дата и время заказа</div>
        //         <div className={inputStyles}>
        //             <input type="text" className={styles.inp} placeholder="Введите"></input>
        //             <input type="button" value="&#215;" className={buttonX}></input>
        //             <svg xmlns="http://www.w3.org/2000/svg" className={locked} viewBox="0 0 448 512">
        //                 <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/>
        //             </svg>
        //         </div>
        //     </div>
        //     <div className={styles.wrapper}>
        //         <div type="text" className={styles.topText}>Дата и время заказа</div>
        //         <div className={styles.inputFormError}>
        //             <input type="text" className={styles.inp} id="black" placeholder="06.12.21"></input>
        //             <input type="button" value="&#215;" className={styles.x}></input>
        //         </div>
        //     </div>
        //     <div className={styles.wrapper}>
        //         <div type="text" className={styles.topText}>Дата и время заказа</div>
        //         <div className={styles.inputFormLock}>
        //             <input type="text" className={styles.inp} id="black" placeholder="06.12.21" disabled></input>
        //             <input type="button" value="&#215;" className={buttonX}></input>
        //             <svg xmlns="http://www.w3.org/2000/svg" className={styles.lock} viewBox="0 0 448 512">
        //                 <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/>
        //             </svg>
        //         </div>
        //     </div>
        // </div>
        <div className={styles.input}>
            <InputForm />
            <InputForm value={'06.12.21'} isErr={isErr} noneX={false}/>
            <InputForm value={'06.12.21'} isLock={isLock} />
        </div>
        
    )
}

export default Input;