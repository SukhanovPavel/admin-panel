import { Buttons } from '../index';

import styles from './PageHeader.module.css';


export const PageHeader = () => {
    return (
      <div className={styles.header}>
        <p className={styles.title}>Список заказов</p>
        <Buttons
          isButton4={true}
          text={"Светлая тема"}
          icon={"Sun"}
          color={"#459DF5"}
        />
      </div>
    );
}