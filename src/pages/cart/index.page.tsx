import React from "react";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Button, Paper, Stack, Typography } from "@mui/material";
import ProductCartItem from "@/components/ProductCartItem";
import { CartItem } from "@/types/cart";
import { getCartItems } from "@/redux/cartSlice";
import { emptyCart } from "@/redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  function handleCheckoutItems() {
    dispatch(emptyCart());
    Router.push("/checkout");
  }

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, maxWidth: 600, margin: "auto", mt: 5, mb: 5 }}
    >
      <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
        Your Cart
      </Typography>
      <Stack spacing={2}>
        {cartItems.map((cartItem: CartItem) => (
          <ProductCartItem key={cartItem.product.id} cartItem={cartItem} />
        ))}
      </Stack>
      {cartItems.length > 0 ? (
        <Button
          color="primary"
          variant="contained"
          onClick={handleCheckoutItems}
          fullWidth
          sx={{ mt: 2 }}
        >
          Checkout Items
        </Button>
      ) : (
        <Typography textAlign="center">No items in the cart</Typography>
      )}
    </Paper>
  );
};

export default Cart;
