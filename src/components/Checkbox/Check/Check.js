

import styles from './Check.module.css';

export const Check = ({checked}) => {
    return (
        <input type="checkbox" className={styles.check} checked={checked} name="" id=""></input>
    )
}