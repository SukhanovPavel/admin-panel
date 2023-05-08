import styles from "./TableColumnNames.module.css";
export const TableColumnNames = ({
    title,
    handleClick,
    children
}) => {
    return (
        <span onClick={handleClick} className={styles._}>{title}{children}</span>
    )
}