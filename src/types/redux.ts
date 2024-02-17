import { CartState } from "@/types/cart";
import { ProductsState } from "@/types/product";

export interface ReduxState {
  cart: CartState;
  products: ProductsState;
}
