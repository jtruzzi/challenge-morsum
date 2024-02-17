import React, { useRef } from "react";
import { useParams } from "next/navigation";
import { Button, Input, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "@/redux/cartSlice";
import { makeGetProductById } from "@/redux/productsSlice";

const Details = () => {
  const props = useParams();
  const dispatch = useDispatch();
  const productId = props?.id;
  const inputRef = useRef<HTMLInputElement>(null);
  const getProductById = makeGetProductById(Number(productId));
  const product = useSelector(getProductById);

  function handleAddCartItem() {
    if (!!inputRef.current && !!product) {
      dispatch(
        addCartItem({
          product: product,
          amount: Number(inputRef.current.value) || 0,
        })
      );
    }
  }

  if (!product)
    return (
      <Typography gutterBottom variant="h5" component="div">
        Product not found
      </Typography>
    );

  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>

      <Input
        inputRef={inputRef}
        type="number"
        inputProps={{
          min: "0",
        }}
        defaultValue={0}
        sx={{ width: "50px" }}
      />
      <Button onClick={handleAddCartItem}>Add to cart</Button>
    </>
  );
};

export default Details;
