import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";

interface Props {
  product: Product;
}

const ProductCartItem = ({ product }: Props) => {
  function handleIncrease() {
    console.info("Added 1 to cart");
  }

  function handleDecrease() {
    console.info("Removed 1 from cart");
  }

  const cartAmount = 0;

  return (
    <Stack direction="row">
      <Image
        loader={() => product.imageUrl}
        width="140"
        height="140"
        src={product.imageUrl}
        alt={product.title}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button onClick={handleDecrease}>-</Button>
        <Typography variant="body1" component="div" noWrap>
          {cartAmount}
        </Typography>
        <Button onClick={handleIncrease}>+</Button>
      </Box>
    </Stack>
  );
};

export default ProductCartItem;
