import React from "react";
import { useDispatch } from "react-redux";
import { Button, Typography, Box, Paper } from "@mui/material";
import { addCartItem } from "@/redux/cartSlice";
import { Product } from "@/types/product";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();

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
        <Typography variant="h6" component="a">
          {product.title} ({product.year})
        </Typography>
      </Link>
      <Button
        onClick={handleAddToCart}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Add to cart
      </Button>
    </Paper>
  );
};

export default ProductCard;
