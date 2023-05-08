// import cx from "classnames";
import {
  FilterRowBottomDate,
  FilterRowBottomStatus,
  FilterRowBottomPrice,
  Button
} from "../../index";
import {useDispatch, useSelector} from "react-redux";
import {
  BUTTON_SIZE as size,
  BUTTON_COLOR as color
} from "../../Button/Button";

import styles from "./FilterRowBottom.module.css";

export const FilterRowBottom = (
    {
        startFilter,
        confirmFiltersButton,
        onChangeDateOne,
        onChangeDateTwo,
        dateValueInputOne,
        handleClickDate,
        handleClickDateTwo,
        dateValueInputTwo,
        inputDateFromError,
        orderStatusValue,
        setOrderStatusValue,
        setInitialOrders
}) => {

    const dateInputValueFrom = useSelector(store => store.filtersRow.dateInputValueFrom );
    const dateInputValueTo = useSelector(store => store.filtersRow.dateInputValueTo );
    const data = useSelector(state => state.orders);

    const dispatch = useDispatch();

  return (
    <div className={styles.filterBottom} id="filters">
      <FilterRowBottomDate
          inputDateFromError={inputDateFromError}
        onChangeDateOne={onChangeDateOne}
        onChangeDateTwo={onChangeDateTwo}
        dateInputValueFrom={dateInputValueFrom}
        dateInputValueTo={dateInputValueTo}
        handleClickDate={handleClickDate}
        handleClickDateTwo={handleClickDateTwo}
      />
      <FilterRowBottomStatus
          setOrderStatusValue={setOrderStatusValue}
          orderStatusValue={orderStatusValue}
      />
      <FilterRowBottomPrice />
      <div className={styles.button}>
        <Button
          handleClick={() => {
              setInitialOrders();
              startFilter();
          }}
          color={color.blueText}
          size={size.large}
          text={"Применить"} />
      </div>
    </div>
  );
};