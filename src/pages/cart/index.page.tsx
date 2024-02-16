import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import Router from "next/router";
import ProductCartItem from "@/components/ProductCartItem";

const Cart = () => {
  const products = [
    {
      id: 1,
      title: "Product title 1",
      description: "Product description 1",
      imageUrl:
        "https://target.scene7.com/is/image/Target/GUEST_dd0c3525-87dc-4080-93a2-279363af8627",
    },
    {
      id: 2,
      title: "Product title 2",
      description: "Product description 2",
      imageUrl:
        "https://target.scene7.com/is/image/Target/GUEST_dd0c3525-87dc-4080-93a2-279363af8627",
    },
    {
      id: 3,
      title: "Product title 3",
      description: "Product description 3",
      imageUrl:
        "https://target.scene7.com/is/image/Target/GUEST_dd0c3525-87dc-4080-93a2-279363af8627",
    },
  ];

  function handleCheckoutItems() {
    console.info("Checkout items");
    Router.push("/checkout");
  }

  return (
    <Stack direction={"column"} gap={3}>
      <Typography variant="h5" component="h1" sx={{ pb: 3 }}>
        Cart elements
      </Typography>
      <Grid rowSpacing={3} columnSpacing={3} container>
        {products.map((product) => (
          <Grid key={product.id} item xs={12}>
            <ProductCartItem product={product} />
          </Grid>
        ))}
      </Grid>
      <Button color="primary" variant="contained" onClick={handleCheckoutItems}>
        Checkout Items
      </Button>
    </Stack>
  );
};

export default Cart;
