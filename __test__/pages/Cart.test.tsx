import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Cart from "@/pages/cart/index.page";

import "jest";

jest.mock("@/pages/cart/hooks", () => ({
  useCartActions: jest.fn(() => ({
    handleCheckoutItems: jest.fn(),
  })),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

const mockStore = configureMockStore();
const initialStateWithItems = {
  cart: {
    cartItems: [
      { product: { id: "1", title: "Product 1", year: "2015" }, quantity: 2 },
      { product: { id: "2", title: "Product 2", year: "2017" }, quantity: 1 },
    ],
  },
};

describe("Cart Component", () => {
  it("displays no items message when cart is empty", () => {
    const store = mockStore({ cart: { cartItems: [] } });
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(screen.getByText("No items in the cart")).toBeInTheDocument();
  });

  it("renders Checkout Items button when list not empty", () => {
    const store = mockStore(initialStateWithItems);
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(
      screen.getByRole("button", { name: "Checkout Items" })
    ).toBeInTheDocument();
  });
});
