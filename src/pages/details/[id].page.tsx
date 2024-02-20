import React from "react";
import { useParams } from "next/navigation";

import { Alert, Box, Button, Paper, Typography } from "@mui/material";
import { useGetProductQuery } from "@/redux/productsApi";
import Link from "next/link";
import AddToCartForm from "@/pages/details/AddToCartForm";

const Details = () => {
  const props = useParams();
  const productId = props?.id;
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductQuery(String(productId), { skip: !productId });

  if (isLoading) {
    return <>LOADING</>;
  }

  return (
    <>
      <Link href="/" passHref>
        <Button variant="outlined" sx={{ mb: 2 }}>
          GO BACK
        </Button>
      </Link>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 600, margin: "auto", mt: 5 }}>
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
            <AddToCartForm product={product} />
          </Box>
        )}
        {error && <Alert severity="error">{error as React.ReactNode}</Alert>}
      </Paper>
    </>
  );
};

export default Details;
