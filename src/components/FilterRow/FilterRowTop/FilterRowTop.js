import { Button, Input, Search, } from "../../index";
import {
  BUTTON_COLOR as button,
  BUTTON_SIZE as size,
} from "../../Button/Button";
// import { useSelector, useDispatch } from 'react-redux';                      ////redux
// import { setSearchValue } from "../../../store/slices/filtersRowSlice";
import styles from "./FilterRowTop.module.css";

export const FilterRowTop = ({
  handleClickFiltres,
  onChange,
  inputValue,
  handleClickInput,
  handleClickClearFilters,
}) => {
  // const value = useSelector(state => state.filtersRow.searchValue);          ////redux
  // const dispatch = useDispatch();
  return (
    <div className={styles.header}>
      <div className={styles.topInpContainer}>
          <Input
            span={<Search color={"#459DF5"} />}
            value={inputValue}
            placeholder={"Номер заказа или ФИО"}
            onChange={ onChange }
            children={
              inputValue? ( 
                <Button
                  color={button.blueText}
                  size={size.large}
                  icon={"XMedium"}
                  iconColor={"#BAD8F5"}
                  handleClick={handleClickInput}
                />
              ) : null
            }
          />
          <Button
            size={size.large}
            text={"Фильтры"}
            icon={"Filter"}
            iconColor={"white"}
            handleClick={handleClickFiltres}
          />
          <Button
            text={"Сбросить фильтры"}
            handleClick={handleClickClearFilters}
          />
      </div>
      <Button
        color={button.blueText}
        size={size.large}
        text={"Загрузка"}
        icon={"Refresh"}
        iconColor={"#459DF5"}
      />
    </div>
  );
};
