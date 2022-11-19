
import {
  Input,
  Button,
} from "../../../index";
import {
  BUTTON_SIZE as size,
  BUTTON_COLOR as color
} from "../../../Button/Button";
import styles from "./FilterRowBottomDate.module.css";



export const FilterRowBottomDate = ({
  onChangeDateOne,
  onChangeDateTwo,
  dateValueInputOne,
  handleClickDate,
  handleClickDateTwo,
  dateValueInputTwo
}) => {
  
  return (
    
    <div className={styles.inputDate}>
      <Input
        span={"с"}
        topText={"Дата оформления"}
        placeholder={"dd.mm.yyyy"}
        value={dateValueInputOne}
        onChange={ onChangeDateOne }
        children={
          dateValueInputOne?
          <Button
            color={color.blueText}
            size={size.small}
            icon={"XMedium"}
            iconColor={"#BAD8F5"}
            handleClick={handleClickDate}
          /> 
          : null
        }
      />
      <Input
        span={"по"}
        value={dateValueInputTwo}
        placeholder={"dd.mm.yyyy"}
        onChange={ onChangeDateTwo}
        children={
          dateValueInputTwo? <Button
            color={color.blueText}
            size={size.small}
            icon={"XMedium"}
            iconColor={"#BAD8F5"}
            handleClick={handleClickDateTwo}
          /> : null
        }
      />
    </div>
  );
}