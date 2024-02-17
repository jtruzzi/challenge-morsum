import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from "react-redux";
import { ProductsState } from "@/redux/productsSlice";
import { reduxStore } from "./reduxStore";
import { CartState } from "./cartSlice";

export interface ReduxState {
  cart: CartState;
  products: ProductsState;
}

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export type ReduxStore = typeof reduxStore;
export type ReduxDispatch = typeof reduxStore.dispatch;
