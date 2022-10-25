import cx from 'classnames';

import styles from './InputForm.module.css';

export const InputForm = ({
    isErr, 
    isLock,
    // noneX=true,
    topText='',
    placeholder='Введите',
    value='',
    inputType="text",
    span,
    children
    }) => {
    const inputStyles = cx({
        [styles.inputForm]: true,
        [styles.inputFormError]: isErr,
        [styles.inputFormLock]: isLock,
    })
    // const buttonX = cx({
    //     // [styles.x]: true,
    //     [styles.xNone]: noneX,
    // })
    // const locked = cx({
    //     [styles.lock]: true,
    //     [styles.lockNone]: !isLock,
    // })

    return (
        <form className={styles.wrapper}>
            <label className={styles.topText}>
                {topText}
            </label>
            <div className={inputStyles}>
                <span>{span}</span>
                <input 
                    type={inputType} 
                    className={styles.inp} 
                    placeholder={placeholder} 
                    value={value}
                    disabled={isLock}></input>
                {/* <button  className={styles.x}> 
                    <svg className={buttonX} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" stroke="#459DF5"/>
                    </svg>
                </button>
                <svg className={locked} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z" fill="#8055FF"/>
                <path d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z" fill="#459DF5"/>
                </svg> */}
                {children}
            </div>
        </form>
    )
}

// type="button" value="&#215;"