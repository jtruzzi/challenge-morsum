import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";
import { CartItem, CartState } from "@/types/cart";
import type { ReduxState } from "@/types/redux";

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
        state.cartItems.push({
          product: action.payload.product,
          quantity: action.payload.amount || 1,
        });
      }
    },
    removeCartItem: (state: CartState, action: PayloadAction<string>) => {
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
    cartItems.reduce(
      (total: number, cartItem: CartItem) => total + cartItem.quantity,
      0
    )
);

export const getCartItems = (state: ReduxState) => state.cart.cartItems;

export const { addCartItem, removeCartItem, emptyCart } = cartSlice.actions;
