import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "@/redux/auth/authSlice";
import cartReducer from "@/redux/cart/cartSlice";
import productReducer from "@/redux/product/productSlice";
import userPreferencesReducer from "@/redux/userPreferences/userPreferencesSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  userPreferences: userPreferencesReducer,
  product: productReducer,
  cart:cartReducer,
});

export default rootReducer;
