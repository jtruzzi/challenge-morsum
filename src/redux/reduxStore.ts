import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productsSlice";
import { productsApi } from "./productsApi";
import { cartSlice } from "./cartSlice";
import { loggerMiddleware } from "./middleware";

export const reduxStore = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loggerMiddleware)
      .concat(productsApi.middleware),
});
