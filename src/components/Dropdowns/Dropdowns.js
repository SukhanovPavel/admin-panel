import cx from 'classnames';
import {
    Input
} from '../index';

import styles from './Dropdowns.module.css';


export const Dropdowns = ({
    title,
    children,
    alignStart,
    input,
    mixClass,
}) => {
    const blockStyle = cx(styles._ , {
        [styles.alignStart]: alignStart,
        mixClass
    })
    return (
        <div className={blockStyle} id="dropdown">
            {title && <div className={styles.title}>{title}</div>}

            <div>{children}</div>

            { input ? <Input /> : null }
        </div>
    )
}