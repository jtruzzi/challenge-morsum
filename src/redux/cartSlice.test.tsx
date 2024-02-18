import { configureStore } from "@reduxjs/toolkit";
import {
  cartSlice,
  addCartItem,
  removeCartItem,
  emptyCart,
  getCartItemsQuantity,
  getCartItems,
} from "./cartSlice";
import { ReduxStore } from "@/redux";

const mockProduct = { id: "111", title: "Test Product 111", year: "2015" };
const mockProduct2 = { id: "222", title: "Test Product 222", year: "2018" };

describe("cartSlice", () => {
  let store: ReduxStore;

  beforeEach(() => {
    store = configureStore({
      reducer: { cart: cartSlice.reducer },
    }) as ReduxStore;
  });

  test("should handle initial state", () => {
    expect(store.getState().cart).toEqual({ cartItems: [] });
  });

  test("should handle removeCartItem and addCartItem", () => {
    store.dispatch(addCartItem({ product: mockProduct, amount: 1 }));
    expect(store.getState().cart.cartItems.length).toBe(1);
    store.dispatch(removeCartItem(mockProduct.id));
    expect(store.getState().cart.cartItems.length).toBe(0);
  });

  test("should handle emptyCart", () => {
    store.dispatch(addCartItem({ product: mockProduct, amount: 1 }));
    store.dispatch(addCartItem({ product: mockProduct2, amount: 1 }));
    expect(store.getState().cart.cartItems.length).toBe(2);
    store.dispatch(emptyCart());
    expect(store.getState().cart.cartItems.length).toBe(0);
  });

  test("getCartItemsQuantity selector", () => {
    store.dispatch(addCartItem({ product: mockProduct, amount: 1 }));
    store.dispatch(addCartItem({ product: mockProduct2, amount: 2 }));
    const quantity = getCartItemsQuantity(store.getState());
    expect(quantity).toBe(3);
  });

  test("getCartItems selector", () => {
    store.dispatch(addCartItem({ product: mockProduct, amount: 1 }));
    const items = getCartItems(store.getState());
    expect(items.length).toBe(1);
    expect(items[0].product).toEqual(mockProduct);
  });
});