import {
    InputForm,
    Buttons
} from "../../../index";

import styles from "./FilterRowBottomPrice.module.css";

export const FilterRowBottomPrice = () => {
    return (
      <div className={styles.inputPrice}>
        <InputForm
          topText={"Сумма заказа"}
          span={"от"}
          value={"5000"}
          children={
            <Buttons isButton6={true} icon={"XMedium"} color={"#BAD8F5"} />
          }
        />
        <InputForm span={"до"} placeholder={"₽"} />
      </div>
    );
};