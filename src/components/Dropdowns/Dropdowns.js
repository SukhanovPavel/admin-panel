import cx from 'classnames';
import {
    Button,
    Checkbox,
    Input
} from '../index';

import styles from './Dropdowns.module.css';


export const Dropdowns = ({
    arr,
    title,
    children,
    isOpen,
    alignStart,
    handleDropDownClick,
    input,
    // addCheckbox,
    mixClass
}) => {
    const blockStyle = cx(styles._ , {
        [styles.null]: isOpen,
        [styles.alignStert]: alignStart,
        // [styles.addCheckbox]: addCheckbox,
        mixClass
    })
    return (
        <div className={blockStyle} >
            { title ? <div className={styles.title}>{title}</div> : null }
            {arr.map(item => 
                <div className='' onClick={handleDropDownClick}>
                    
                    <Button
                        children={children? <Checkbox checked={item.checked} /> : null}
                        text={item.name}
                        size={item.size}
                        color={item.color}
                        handleClick={item.handleClick}
                    />
                </div>)
            }
            { input ? <Input /> : null }
        </div>
    )
}

// export const DropdownsItem = () => {
//     return (
//         <div className={blockStyle} >
//             { title ? <div className={styles.title}>{title}</div> : null }
//             {arr.map(item => 
//                 <Button
//                     children={children}
//                     text={item.name}
//                     size={item.size}
//                     color={item.color}
//                     handleClick={item.handleClick}
//                 />)
//             }
//         </div>
//     )
// }