import React from "react";
import Router from "next/router";
import { useDispatch } from "react-redux";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { addCartItem } from "@/redux/cartSlice";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addCartItem({ product: product, amount: 1 }));
  }

  function handleRedirectionToProduct(id: number) {
    Router.push(`/details/${id}`);
  }

  return (
    <Card>
      <CardActionArea onClick={() => handleRedirectionToProduct(product.id)}>
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
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
