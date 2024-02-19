import React from "react";
import { useDispatch } from "react-redux";
import { Button, Typography, Stack, Box, IconButton } from "@mui/material";
import { removeCartItem } from "@/redux/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
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
          <IconButton onClick={handleRemove} aria-label="delete">
            <DeleteIcon />
          </IconButton>{" "}
        </Typography>
      </Box>
    </Stack>
  );
};

export default ProductCartItem;
