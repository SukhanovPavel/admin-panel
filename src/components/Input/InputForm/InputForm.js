import cx from 'classnames';

import styles from './InputForm.module.css';

export const InputForm = ({
    isErr, 
    isLock,
    topText='',
    placeholder='Введите',
    value='',
    inputType="text",
    span,
    children,
    onChange
    }) => {
    const inputStyles = cx({
        [styles.inputForm]: true,
        [styles.inputFormError]: isErr,
        [styles.inputFormLock]: isLock,
    })
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
                    onChange={onChange}
                    disabled={isLock}></input>
                {children}
            </div>
        </form>
    )
}

// type="button" value="&#215;"