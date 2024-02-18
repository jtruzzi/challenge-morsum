import Router from "next/router";
import { useDispatch } from "react-redux";
import { emptyCart } from "@/redux/cartSlice";

export const useCartActions = () => {
  const dispatch = useDispatch();

  const handleCheckoutItems = () => {
    dispatch(emptyCart());
    Router.push("/checkout");
  };

  return { handleCheckoutItems };
};
