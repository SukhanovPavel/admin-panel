import { useState } from "react";
import { InputForm, Buttons } from "../../../index";

import styles from "./FilterRowBottomDate.module.css";

const dateI = new Date();

export const FilterRowBottomDate = () => {
  let [val, setValue] = useState(`${dateI.getDate()}.${
      dateI.getMonth() > 9 ? dateI.getMonth() : "0" + dateI.getMonth()
    }.${dateI.getFullYear()}`);
    let a = false;
  return (
    
    <div className={styles.inputDate}>
      <InputForm
        isErr={a}
        span={"с"}
        topText={"Дата оформления"}
        placeholder={"dd.mm.yyyy"}
        value={val}
        onChange={ (event) => setValue(val = event.target.value)}
        children={
          <Buttons 
            isButton6={true}
            icon={"XMedium"}
            color={"#BAD8F5"}
            handleClick={() => setValue(val="")}
          />
        }
      />
      <InputForm span={"по"} placeholder={"dd.mm.yyyy"} />
    </div>
  );
}