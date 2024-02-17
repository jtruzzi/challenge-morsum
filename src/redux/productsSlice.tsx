import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product";
import type { ReduxState } from "./index";

export interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [
    {
      id: 1,
      title: "Product title 1",
      description: "Product description 1",
      imageUrl:
        "https://target.scene7.com/is/image/Target/GUEST_dd0c3525-87dc-4080-93a2-279363af8627",
    },
    {
      id: 2,
      title: "Product title 2",
      description: "Product description 2",
      imageUrl:
        "https://target.scene7.com/is/image/Target/GUEST_dd0c3525-87dc-4080-93a2-279363af8627",
    },
    {
      id: 3,
      title: "Product title 3",
      description: "Product description 3",
      imageUrl:
        "https://target.scene7.com/is/image/Target/GUEST_dd0c3525-87dc-4080-93a2-279363af8627",
    },
  ],
};

export const getProducts = createSelector(
  [(state: ReduxState) => state.products.products],
  (products) => products
);

export const makeGetProductById = (id: number) =>
  createSelector(
    [(state: ReduxState) => state.products.products],
    (products: Product[]) => products.find((product) => product.id === id)
  );

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productsSlice.actions;

export const selectCart = (state: ReduxState) => state.products.products;
