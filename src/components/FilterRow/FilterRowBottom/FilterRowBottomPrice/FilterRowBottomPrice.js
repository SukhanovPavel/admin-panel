import {
    Input,
    Button
} from "../../../index";
import {useSelector, useDispatch} from "react-redux";
import {setOrderPriceFrom, setOrderPriceTo} from "../../../../store/slices/filtersRowSlice";
import {
  BUTTON_SIZE as size,
  BUTTON_COLOR as color
} from "../../../Button/Button";
import styles from "./FilterRowBottomPrice.module.css";

export const FilterRowBottomPrice = () => {

    const orderPriceFrom = useSelector(store => store.filtersRow.orderPriceFrom )
    const orderPriceTo = useSelector(store => store.filtersRow.orderPriceTo )
    const dispatch = useDispatch();

    return (
      <div className={styles.inputPrice}>
        <Input
          topText={"Сумма заказа"}
          span={"от"}
          onChange={({target: {value}}) => dispatch(setOrderPriceFrom({text: value}))}
          value={orderPriceFrom}
          children={
              orderPriceFrom && <Button
                  handleClick={() => dispatch(setOrderPriceFrom(""))}
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
          onChange={({target: {value}}) => dispatch(setOrderPriceTo({text: value}))}
          value={orderPriceTo}
          children={
            orderPriceTo && <Button
              handleClick={() => dispatch(setOrderPriceTo(""))}
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