import React from "react";
import ProductCard from "@/components/ProductCard";
import { Button, Typography } from "@mui/material";
import { Product } from "@/types/product";
import Link from "next/link";

const Details = () => {
  const product: Product = {
    id: 1,
    title: "Product title 1",
    description: "Product description 1",
    imageUrl:
      "https://target.scene7.com/is/image/Target/GUEST_dd0c3525-87dc-4080-93a2-279363af8627",
  };

  function handleAddToCart() {
    console.info("Added to cart");
  }

  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>

      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </>
  );
};

export default Details;
