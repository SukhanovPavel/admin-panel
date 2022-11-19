import {
  Button,
  TitleText
} from '../index';

import {
  BUTTON_SIZE as size,
  BUTTON_COLOR as color
} from '../Button/Button';

import styles from './PageHeader.module.css';

export const PageHeader = () => {
    return (
      <div className={styles.header}>
        <TitleText
          title={"Список заказов"}
        />
        {/* { themes.light?  */}     
        <Button
          size={size.large}
          color={color.blueText}
          text={"Светлая тема"}
          icon={"Sun"}
          iconColor={"#459DF5"}
        />
        {/* : <Button           ////  добавиить переключатель темы + в css везде
            size={size.large}
            color={color.blueText}
            text={"Темная тема"}
            icon={"Moon"}
            iconColor={"#459DF5"}
          /> } */}
      </div>
    );
}