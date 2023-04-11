import { combineReducers } from "redux";
import filtersRow from "../slices/filtersRowSlice";
import view from "../slices/viewSlice";
import orders from "../slices/ordersSlice";

const reducers = combineReducers({
  filtersRow,
  view,
  orders,
});

export default reducers;