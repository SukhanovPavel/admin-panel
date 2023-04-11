import cx from 'classnames';
import { SvgIcons } from '../index';
import { ICON_NAME as icon } from '../svg/SvgIcons/SvgIcons';
import styles from './Checkbox.module.css';

export const Checkbox = ({
    handleCheckboxClick,
    checked
}) => {

    const blockStyle = cx( styles._, { 
        [styles.checked]: checked
    })

    return (
      <div
        id="check"
        className={blockStyle}
        onClick={handleCheckboxClick}
        >
        {checked ? <SvgIcons icon={icon.Checkmark} color={"white"} /> : null}
      </div>
    );
}