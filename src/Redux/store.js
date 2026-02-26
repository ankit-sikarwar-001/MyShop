import { configureStore } from "@reduxjs/toolkit";
import cartReaducer from "../Redux/slice";
import productReducer from "../Redux/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReaducer,
    products: productReducer,
  },
});

export default store;
