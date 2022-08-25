import styles from './Radio.module.css';

function Radio() {
    return (
        <div className={styles.radioPos}>
            <input type={styles.radio} className={styles.radio} name="" id=""></input>
            <input type={styles.radio} className={styles.radio} checked="checked" name="" id=""></input>
        </div>
    )
}

export default Radio;