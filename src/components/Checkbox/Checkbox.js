import { Check } from "../index"

import styles from './Checkbox.module.css';

function Checkbox() {
    return (
        <div className={styles.checkbox}>
            <Check />
            <Check checked={true} />
        </div>
    )
}

export default Checkbox;