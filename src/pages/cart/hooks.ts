import Router from "next/router";
import { useDispatch } from "react-redux";
import { emptyCart } from "@/redux/cartSlice";

// Extracted the logic to it's own hook so it'd be easier to test this components ui changes by just mocking the hook.
export const useCartActions = () => {
  const dispatch = useDispatch();

  const handleCheckoutItems = () => {
    dispatch(emptyCart());
    Router.push("/checkout");
  };

  return { handleCheckoutItems };
};
