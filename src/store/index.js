import { configureStore } from "@reduxjs/toolkit";
// import logger from './middlewares/logger';
import rootReducer from "./reducers";


const store = configureStore({
    reducer: rootReducer
});
export default store;