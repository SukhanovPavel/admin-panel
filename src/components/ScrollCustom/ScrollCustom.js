
import styles from "./ScrollCustom.module.css";

export const ScrollCustom = () => {
    return (
        <div className={styles.scroll}>
            <div className={styles.scrollBody}></div>
            <div className={styles.scrollRoad}></div>
        </div>
    )
}