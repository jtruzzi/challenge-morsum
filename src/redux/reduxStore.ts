import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import { cartSlice } from "./cartSlice";
import { loggerMiddleware } from "./middleware";

export const reduxStore = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loggerMiddleware)
      .concat(productsApi.middleware as any),
});
