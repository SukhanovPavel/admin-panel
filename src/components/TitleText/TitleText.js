import cx from 'classnames';

import styles from './TitleText.module.css';

export const TitleText = ({
title,
colorBlue
}) => {
    const titleStyle = cx(styles.title, {
        [styles.titleBlue]: colorBlue
    })
  return <div className={titleStyle}>{title}</div>;
}