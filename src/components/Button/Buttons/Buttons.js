import cx from 'classnames';
import { SvgIcons } from '../../Svg/SvgIcons';

import styles from './Buttons.module.css';

export const Buttons = ({
    handleClick,
    icon,
    color,
    text,
    isButton1,
    isButton2,
    isButton3,
    isButton4,
    isButton5,
    isButton6,
    isButton7,
    isButton8,
    isButton9,
    isButton10,
    isButton11,
    isButton12,
    isButton13,
    isButton14,
    isButton15,
    isRed,
    buttonNone
}) => {

    const buttonClass = cx({
            [styles.button1]: isButton1,
            [styles.button2]: isButton2,
            [styles.button3]: isButton3,
            [styles.button4]: isButton4,
            [styles.button5]: isButton5,
            [styles.button6]: isButton6,
            [styles.button7]: isButton7,
            [styles.button8]: isButton8,
            [styles.button9]: isButton9,
            [styles.button10]: isButton10,
            [styles.button11]: isButton11,
            [styles.button12]: isButton12,
            [styles.button13]: isButton13,
            [styles.button14]: isButton14,
            [styles.button15]: isButton15,
            [styles.red]: isRed,
            [styles.buttonNone]: buttonNone
        })

    return (
        <>
        <div 
            className={buttonClass}
            onClick={handleClick}
        >
            <SvgIcons icon={icon} color={color}/>
            {text}
        </div>
        </>
    )
}