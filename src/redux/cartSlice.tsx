import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";
import { CartItem } from "../types/cartItem";
import type { ReduxState } from "./index";

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (
      state: CartState,
      action: PayloadAction<{
        product: Product;
        amount: number;
      }>
    ) => {
      const index = state.cartItems.findIndex(
        (cartItem) => cartItem.product.id === action.payload.product.id
      );
      if (index >= 0) {
        state.cartItems[index].quantity += action.payload.amount;
      } else {
        state.cartItems.push({ product: action.payload.product, quantity: 1 });
      }
    },
    removeCartItem: (state: CartState, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.product.id !== action.payload
      );
    },
    emptyCart: (state: CartState) => {
      state.cartItems = [];
    },
  },
});

export const getCartItemsQuantity = createSelector(
  [(state: ReduxState) => state.cart.cartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const getCartItems = createSelector(
  [(state: ReduxState) => state.cart.cartItems],
  (cartItems) => cartItems
);

export const { addCartItem, removeCartItem, emptyCart } = cartSlice.actions;

export const selectCart = (state: ReduxState) => state.cart.cartItems;
