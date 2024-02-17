import React from "react";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Stack, Typography } from "@mui/material";
import ProductCartItem from "@/components/ProductCartItem";
import { CartItem } from "@/types/cartItem";
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
    <Stack direction={"column"} gap={3}>
      <Typography variant="h5" component="h1" sx={{ pb: 3 }}>
        Cart items
      </Typography>
      <Grid rowSpacing={3} columnSpacing={3} container>
        {cartItems.map((cartItem: CartItem) => {
          return (
            <Grid key={cartItem.product.id} item xs={12}>
              <ProductCartItem cartItem={cartItem} />
            </Grid>
          );
        })}
      </Grid>
      {cartItems.length > 0 ? (
        <Button
          color="primary"
          variant="contained"
          onClick={handleCheckoutItems}
        >
          Checkout Items
        </Button>
      ) : (
        "No items in the cart"
      )}
    </Stack>
  );
};

export default Cart;
