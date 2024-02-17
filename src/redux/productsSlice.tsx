import { createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "@/types/product";
import type { ReduxState } from "@/types/redux";

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectCart = (state: ReduxState) => state.products.products;
