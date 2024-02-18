import React from "react";
import { useDispatch } from "react-redux";
import { Button, Typography, Stack, Box } from "@mui/material";
import { removeCartItem } from "@/redux/cartSlice";
import { CartItem } from "@/types/cart";

interface Props {
  cartItem: CartItem;
}

const ProductCartItem = ({ cartItem }: Props) => {
  const dispatch = useDispatch();
  const { product } = cartItem;

  function handleRemove() {
    dispatch(removeCartItem(cartItem.product.id));
  }

  return (
    <Stack direction="row">
      <Box sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.title} ({product.year})
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          ({cartItem.quantity})
        </Typography>
        <Button onClick={handleRemove}>Remove</Button>
      </Box>
    </Stack>
  );
};

export default ProductCartItem;
