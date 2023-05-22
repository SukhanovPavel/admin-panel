

import styles from './DropDown.module.css';

export const DropDown = ({
    dropDownItem,
    title,

}) => {

const dropdowns = dropDownItem.map( item => 
    <DropDownItem
        key={item.id}
        children={item.children}
        item={item.name}
        checked={item.checked}
    /> )

    return (
        <div className={styles._}>
            {
                dropDownItem ? 
                <ul className={styles.list}>
                    {dropdowns}
                </ul>
                : ""
            }

            {/* {
                title ? <p>{title}</p> : ""
            }

            {
                true ?  
                <div className={styles.buttons}>
                    <Button />
                    <Button />
                </div>
                : ""
            } */}
        </div>
    )
}

export const DropDownItem = ({
    children,
    item
}) => {
    return (
        <li className={styles.listItem}>
            {children}
            {item}
        </li>
    )
}