import cx from "classnames";
import {
  FilterRowBottomDate,
  FilterRowBottomStatus,
  FilterRowBottomPrice,
  Buttons
} from "../../index";

import styles from "./FilterRowBottom.module.css";

export const FilterRowBottom = ({
  filterNone
}) => {
  const filterClass = cx({
    [styles.filterBottom]: true,
    [styles.filterNone]: filterNone
  })
  return (
    <div className={filterClass}>
      <FilterRowBottomDate />
      <FilterRowBottomStatus />
      <FilterRowBottomPrice />
      <Buttons isButton5={true} text={"Применить"} />
    </div>
  );
};