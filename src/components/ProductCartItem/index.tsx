import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Button, Typography, Stack, Box } from "@mui/material";
import { removeCartItem } from "@/redux/cartSlice";
import { CartItem } from "@/types/cartItem";

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
