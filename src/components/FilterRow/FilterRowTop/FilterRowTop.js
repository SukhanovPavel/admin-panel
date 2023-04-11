import { toggleIsOpenFilter } from '../../../store/slices/viewSlice';
import { Button, Input, Search, } from "../../index";
import {
  BUTTON_COLOR as button,
  BUTTON_SIZE as size,
} from "../../Button/Button";
import { useSelector, useDispatch } from 'react-redux';                      ////redux
import { clearSearchValue, setSearchValue } from "../../../store/slices/filtersRowSlice";
import styles from "./FilterRowTop.module.css";

export const FilterRowTop = ({
  // handleClickFiltres,
  // onChange,
  // inputValue,
  // handleClickInput,
  handleClickClearFilters,
}) => {
  const searchValue = useSelector(state => state.filtersRow.searchValue);          ////redux
    const isLoading = useSelector(state => state.view.isLoading);          ////redux
  const dispatch = useDispatch();
  
  const handleChange = ({ target: { value } }) => {
    const action = setSearchValue({
      text: value 
    })
    dispatch(action);
  }

  const handleClickClearInput = () => {
    const action = clearSearchValue()
    dispatch(action);
  }

  const handleFilterButtonClick = () => {
      dispatch(toggleIsOpenFilter())
  }

  return (
    <div className={styles.header}>
      <div className={styles.topInpContainer}>
          <Input
            span={<Search color={"#459DF5"} />}
            value={searchValue}  
            placeholder={"Номер заказа или ФИО"}
            onChange={handleChange}
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
            handleClick={handleFilterButtonClick}
          />
          <Button
            text={"Сбросить фильтры"}
            handleClick={handleClickClearFilters}
          />
      </div>
        {isLoading && <Button
                        color={button.blueText}
                        size={size.large}
                        text={"Загрузка"}
                        icon={"Refresh"}
                        iconColor={"#459DF5"}
                      />}
    </div>
  );
};
