import styles from './Input.module.css';

function Input() {
    return (
        <div className={styles.input}>
            <div className={styles.field}>
                <div type="text" className={styles.topText}>Дата и время заказа</div>
                <div className={styles.inputFormBorderBlue}>
                    <input type="text" className={styles.inp} placeholder="Введите"></input>
                </div>
            </div>
            <div className={styles.field}>
                <div type="text" className={styles.topText}>Дата и время заказа</div>
                <div className={styles.inputFormBorderRed}>
                    <input type="text" className={styles.inp} id="black" placeholder="06.12.21"></input>
                    <input type="button" value="&#215;" className={styles.x}></input>
                </div>
            </div>
            <div className={styles.field}>
                <div type="text" className={styles.topText}>Дата и время заказа</div>
                <div className={styles.inputFormBorderBlueBackgroundBlue}>
                    <input type="text" className={styles.inp} id="black" placeholder="06.12.21" disabled></input>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.lock} viewBox="0 0 448 512">
                        <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Input;