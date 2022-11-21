
import {
  Input,
  Button,
} from "../../../index";
import {
  BUTTON_SIZE as size,
  BUTTON_COLOR as color
} from "../../../Button/Button";
import { useSelector, useDispatch } from 'react-redux';                      ////redux
import { setDateInputValueFrom, setDateInputValueTo } from "../../../../store/slices/filtersRowSlice";

import styles from "./FilterRowBottomDate.module.css";



export const FilterRowBottomDate = ({
  onChangeDateOne,
  onChangeDateTwo,
  dateValueInputOne,
  handleClickDate,
  handleClickDateTwo,
  dateValueInputTwo
}) => {

  const dateInputValueFrom = useSelector(store => store.filtersRow.dateInputValueFrom )
  const dateInputValueTo = useSelector(store => store.filtersRow.dateInputValueTo )
  const dispatch = useDispatch();

  return (
    
    <div className={styles.inputDate}>
      <Input
        span={"с"}
        topText={"Дата оформления"}
        placeholder={"dd.mm.yyyy"}
        value={dateInputValueFrom}
        onChange={ ({ target: { value } }) => dispatch(setDateInputValueFrom({ text: value })) }
        children={
          dateInputValueFrom?
          <Button
            color={color.blueText}
            size={size.small}
            icon={"XMedium"}
            iconColor={"#BAD8F5"}
            handleClick={ () => dispatch(setDateInputValueFrom({ text: '' }) ) }
          /> 
          : null
        }
      />
      <Input
        span={"по"}
        value={dateInputValueTo}
        placeholder={"dd.mm.yyyy"}
        onChange={ ({ target: { value } }) => dispatch(setDateInputValueTo({ text: value })) }
        children={
          dateInputValueTo? <Button
            color={color.blueText}
            size={size.small}
            icon={"XMedium"}
            iconColor={"#BAD8F5"}
            handleClick={ () => dispatch(setDateInputValueTo({ text: '' })) }
          /> : null
        }
      />
    </div>
  );
}