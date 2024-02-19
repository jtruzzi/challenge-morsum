import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper, IconButton, Badge, Link as MUILink } from "@mui/material";
import { addCartItem, getProductCartItemsQuantity } from "@/redux/cartSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Product } from "@/types/product";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();
  const cartItemQuantity = useSelector(getProductCartItemsQuantity(product.id));

  function handleAddToCart() {
    dispatch(addCartItem({ product: product, amount: 1 }));
  }

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
        textAlign: "center",
      }}
    >
      <Link href={`/details/${product.id}`} passHref>
        <MUILink variant="h6">
          {product.title} ({product.year})
        </MUILink>
      </Link>
      <IconButton
        onClick={handleAddToCart}
        color="primary"
        aria-label="add to shopping cart"
        sx={{ mt: 2 }}
      >
        <Badge
          badgeContent={cartItemQuantity > 0 ? `${cartItemQuantity}` : 0}
          color="secondary"
        >
          <AddShoppingCartIcon />
        </Badge>
      </IconButton>
    </Paper>
  );
};

export default ProductCard;
