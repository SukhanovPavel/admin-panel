import { Button, Input, Search, } from "../../index";
import {
  BUTTON_COLOR as button,
  BUTTON_SIZE as size,
} from "../../Button/Button";
import { useSelector, useDispatch } from 'react-redux';                      ////redux
import { setSearchValue, setOpenFiltersButton } from "../../../store/slices/filtersRowSlice";
import styles from "./FilterRowTop.module.css";

export const FilterRowTop = ({
  // handleClickFiltres,
  // onChange,
  // inputValue,
  // handleClickInput,
  handleClickClearFilters,
}) => {
  const searchValue = useSelector(state => state.filtersRow.searchValue);          ////redux
  const dispatch = useDispatch();
  
  const handleChange = ({ target: { value } }) => {
    const action = setSearchValue({
      text: value 
    })
    dispatch(action);
  }

  const handleClickClearInput = () => {
    const action = setSearchValue({
      text: ''
    })
    dispatch(action);
  }

  return (
    <div className={styles.header}>
      <div className={styles.topInpContainer}>
          <Input
            span={<Search color={"#459DF5"} />}
            value={searchValue}  
            placeholder={"Номер заказа или ФИО"}
            onChange={ handleChange }
            children={
              searchValue? ( 
                <Button
                  color={button.blueText}
                  size={size.large}
                  icon={"XMedium"}
                  iconColor={"#BAD8F5"}
                  handleClick={handleClickClearInput}
                />
              ) : null
            }
          />
          <Button
            size={size.large}
            text={"Фильтры"}
            icon={"Filter"}
            iconColor={"white"}
            handleClick={ () => dispatch(setOpenFiltersButton()) }
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
