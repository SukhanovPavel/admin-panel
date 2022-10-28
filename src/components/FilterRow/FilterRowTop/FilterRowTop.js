
import { 
Buttons,
SearchForm
} from '../../index';

import styles from './FilterRowTop.module.css';

export const FilterRowTop = ({
  handleClick
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.topInpContainer}>
        <SearchForm />
        <Buttons
          isButton1={true}
          text={"Фильтры"}
          icon={"Filter"}
          color={"white"}
          handleClick={handleClick}
        />
        <Buttons isButton5={true} text={"Сбросить фильтры"} />
      </div>
      <Buttons
        isButton4={true}
        text={"Загрузка"}
        icon={"Refresh"}
        color={"#459DF5"}
      />
    </div>
  );
}