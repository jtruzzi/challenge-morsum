import React from "react";
import Router from "next/router";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  function handleAddToCart() {
    console.info("Added to cart");
  }

  function handleRedirectionToProduct() {
    Router.push("/checkout");
  }

  return (
    <Card>
      <CardActionArea onClick={handleRedirectionToProduct}>
        <CardMedia
          component="img"
          height="140"
          image={product.imageUrl}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
