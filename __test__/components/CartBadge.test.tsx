import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CartBadge from "@/components/NavBar/CartBadge";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("CartBadge Component", () => {
  it("displays the correct CartItems quantity", () => {
    const store = mockStore({
      cart: {
        cartItems: [
          { id: "111", quantity: 2 },
          { id: "222", quantity: 3 },
          { id: "333", quantity: 10 },
        ],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <CartBadge />
      </Provider>
    );

    expect(getByText("15")).toBeInTheDocument();
  });
});
