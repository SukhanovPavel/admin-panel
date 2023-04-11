// import cx from "classnames";
import {
  FilterRowBottomDate,
  FilterRowBottomStatus,
  FilterRowBottomPrice,
  Button
} from "../../index";
import {
  BUTTON_SIZE as size,
  BUTTON_COLOR as color
} from "../../Button/Button";
import styles from "./FilterRowBottom.module.css";

export const FilterRowBottom = ({
  onChangeDateOne,
  onChangeDateTwo,
  dateValueInputOne,
  handleClickDate,
  handleClickDateTwo,
  dateValueInputTwo
}) => {
  return (
    <div className={styles.filterBottom} id="filters">
      <FilterRowBottomDate 
        onChangeDateOne={onChangeDateOne}
        onChangeDateTwo={onChangeDateTwo}
        dateValueInputOne={dateValueInputOne}
        dateValueInputTwo={dateValueInputTwo}
        handleClickDate={handleClickDate}
        handleClickDateTwo={handleClickDateTwo}
      />
      <FilterRowBottomStatus />
      <FilterRowBottomPrice />
      <div className={styles.button}>
        <Button
          color={color.blueText}
          size={size.large}
          text={"Применить"} />
      </div>
    </div>
  );
};