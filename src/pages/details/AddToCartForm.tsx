import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, getProductCartItemsQuantity } from "@/redux/cartSlice";
import { Box, Button, Input, Typography } from "@mui/material";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

const AddToCartForm = ({ product }: Props) => {
  const dispatch = useDispatch();
  const cartItemQuantity = useSelector(getProductCartItemsQuantity(product.id));

  const inputRef = useRef<HTMLInputElement>(null);

  function handleAddCartItem() {
    if (!!inputRef.current && !!product) {
      dispatch(
        addCartItem({
          product,
          amount: Number(inputRef.current.value) || 0,
        })
      );
    }
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
      <Input
        inputRef={inputRef}
        type="number"
        inputProps={{
          min: "0",
        }}
        defaultValue={0}
        sx={{ mr: 1, width: "100px", height: "40px" }}
      />
      <Button onClick={handleAddCartItem} variant="contained" color="primary">
        Add to cart <br />
      </Button>
      <Typography sx={{ ml: 2 }}>
        {cartItemQuantity > 0 ? `(${cartItemQuantity} in cart)` : null}
      </Typography>
    </Box>
  );
};

export default AddToCartForm;
