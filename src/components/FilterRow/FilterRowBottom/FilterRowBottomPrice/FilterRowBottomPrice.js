import {
    Input,
    Button
} from "../../../index";
import {
  BUTTON_SIZE as size,
  BUTTON_COLOR as color
} from "../../../Button/Button";
import styles from "./FilterRowBottomPrice.module.css";

export const FilterRowBottomPrice = () => {
    return (
      <div className={styles.inputPrice}>
        <Input
          topText={"Сумма заказа"}
          span={"от"}
          onChange={() => {}}
          value={"5000"}
          children={
            <Button
              size={size.small}
              color={color.blueText}
              icon={"XMedium"}
              iconColor={"#BAD8F5"}
            />
          }
        />
        <Input
          span={"до"}
          placeholder={"₽"}
          onChange={() => {}}
          value={''}
          children={
            <Button
              size={size.small}
              color={color.blueText}
              icon={"XMedium"}
              iconColor={"#BAD8F5"}
            />
          }
        />
      </div>
    );
};