import cx from 'classnames';
import { SvgIcons } from '../index';

import styles from './Button.module.css';

const noob = () => {};

export const BUTTON_COLOR = {
    blue: 'blue',
    red: 'red',
    blueText: 'blueText',
    blackText: 'blackText'
}

export const BUTTON_SIZE = {
    small: 'small',
    large: 'large'
}

export const Button = ({
    handleClick=noob,
    icon,
    iconColor,
    text,
    color,
    size=BUTTON_SIZE.large,
    children
}) => {

    const buttonClass = cx({
            [styles._]: true,
            [styles.colorTextBlue]: color === BUTTON_COLOR.blueText,
            [styles.colorRed]: color === BUTTON_COLOR.red,
            [styles.colorTextBlack]: color === BUTTON_COLOR.blackText,

            [styles.sizeSmall]: size === BUTTON_SIZE.small,
            [styles.sizeLarge]: size === BUTTON_SIZE.large,
        })

    return (
        <div 
            className={ buttonClass }
            onClick={ handleClick }
        >
            { children }
            { icon? <SvgIcons
                icon={icon}
                color={iconColor}
            /> : null }
            { text }
        </div>
    )
}