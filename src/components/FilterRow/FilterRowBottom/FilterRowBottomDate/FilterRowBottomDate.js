
import {
  Input,
  Button,
} from "../../../index";
import {
  BUTTON_SIZE as size,
  BUTTON_COLOR as color
} from "../../../Button/Button";
import { useSelector, useDispatch } from 'react-redux';                      ////redux
import { setDateInputValueFrom, setDateInputValueTo, setFilterData } from "../../../../store/slices/filtersRowSlice";

import styles from "./FilterRowBottomDate.module.css";



export const FilterRowBottomDate = ({
  onChangeDateOne,
  onChangeDateTwo,
  dateInputValueFrom,
  handleClickDate,
  handleClickDateTwo,
  dateInputValueTo,
  inputDateFromError
}) => {

  const dispatch = useDispatch();

  const regexp =  /^\d{2}[./-]\d{2}[./-]\d{4}$/

  return (
    
    <div className={styles.inputDate}>
      <Input
          isErr={dateInputValueFrom && !dateInputValueFrom.match(regexp)}
        span={"с"}
        topText={"Дата оформления"}
        placeholder={"dd.mm.yyyy"}
        value={dateInputValueFrom}
        onChange={ ( { target: { value } }) => {
            dispatch(setFilterData({name: "dateInputValueFrom", text: value}))
            console.log(new Date(dateInputValueFrom.split('.').reverse().join(".")).getTime())
        } }
        children={
          dateInputValueFrom &&
          <Button
            color={color.blueText}
            size={size.small}
            icon={"XMedium"}
            iconColor={"#BAD8F5"}
            handleClick={ () => dispatch(setDateInputValueFrom({ text: '' }) ) }
          />
        }
      />
      <Input
        span={"по"}
        value={dateInputValueTo}
        placeholder={"dd.mm.yyyy"}
        onChange={ ({ target: { value } }) =>
            dispatch(setFilterData({ name: "dateInputValueTo", text: value })) }
        children={
          dateInputValueTo && <Button
            color={color.blueText}
            size={size.small}
            icon={"XMedium"}
            iconColor={"#BAD8F5"}
            handleClick={ () => dispatch(setDateInputValueTo({ text: '' })) }
          />
        }
      />
    </div>
  );
}