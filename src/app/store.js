import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import userReducer from "../features/users/userSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
  },
});

export default store;
