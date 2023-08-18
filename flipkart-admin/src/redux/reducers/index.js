import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import userReducers from "./user.reducers";
import productReducers from "./product.reducer";
import orderReducers from "./orders.reducer";
import categoryReducers from "./category.reducer";
const rootReducer = combineReducers({
  auth: authReducers,
  user: userReducers,
  order: orderReducers,
  category: categoryReducers,
  product: productReducers
});
export default rootReducer;
