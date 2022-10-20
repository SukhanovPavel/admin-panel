import styles from './Checkbox.module.css';

function Checkbox() {
    return (
        <div className={styles.checkbox}>
            <input type="checkbox" className={styles.check} name="" id=""></input>
            <input type="checkbox" className={styles.check} checked="checked" name="" id=""></input>
        </div>
    )
}

export default Checkbox;