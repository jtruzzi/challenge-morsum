export interface Product {
  id: number;
  title: string;
  year: string;
}

export interface ProductsState {
  products: Product[];
}
