import { useState } from "react";
import { 
    InputForm,
    Buttons,
    ListDD
} from "../../../index";

import styles from "./FilterRowBottomStatus.module.css";

export const FilterRowBottomStatus = () => {
    const [listDD, setListDD] = useState(false);
    return (
        <div className={styles.inputStatus}>
            <InputForm
            topText={"Статус заказа"}
            value={"Любой"}
            isButton6={true}
            children={
                <Buttons
                isButton6={true}
                handleClick={() => setListDD(!listDD)}
                icon={"VArrow"}
                color={"#BAD8F5"}
                />
            }
            />
            <ListDD isOpen={listDD} />
        </div>
  );
}