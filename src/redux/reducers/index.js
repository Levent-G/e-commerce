import { combineReducers } from "redux";

import ProductReducer from "../reducers/ProductReducer";
import BasketReducer from "../reducers/BasketReducer";
export default combineReducers({
  products: ProductReducer,
  getoneproduct: ProductReducer,
  basketproduct: BasketReducer,
  search: ProductReducer,
});
