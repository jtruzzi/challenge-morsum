import React, { useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { Alert, Box, Button, Input, Paper, Typography } from "@mui/material";
import { addCartItem } from "@/redux/cartSlice";
import { useGetProductQuery } from "@/redux/productsApi";
import Link from "next/link";

const Details = () => {
  const dispatch = useDispatch();
  const props = useParams();
  const productId = props?.id;
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductQuery(String(productId), { skip: !productId });

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

  if (isLoading) {
    return <>LOADING</>;
  }

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, margin: "auto", mt: 5 }}>
      <Link href="/" passHref>
        <Button variant="outlined" sx={{ mb: 2 }}>
          GO BACK
        </Button>
      </Link>
      {!!product && (
        <Box
          sx={{
            my: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {product.title} ({product.year})
          </Typography>
          {/* Consider adding an Image component here if you have product images */}
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
            <Button
              onClick={handleAddCartItem}
              variant="contained"
              color="primary"
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      )}
      {error && <Alert severity="error">{error as React.ReactNode}</Alert>}
    </Paper>
  );
};

export default Details;
