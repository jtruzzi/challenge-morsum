import React from "react";
import { Alert, Grid, Typography } from "@mui/material";
import ProductCard from "@/components/ProductCard";
import { useGetProductsQuery } from "@/redux/productsApi";
import { Product } from "@/types/product";
const Home = () => {
  const { data: products, error, isLoading } = useGetProductsQuery({});

  if (isLoading) {
    return <>LOADING</>;
  }

  return (
    <>
      <Typography variant="h4" component="h1" sx={{ pb: 3 }}>
        List of products
      </Typography>
      <Grid rowSpacing={3} columnSpacing={3} container>
        {products?.map((product: Product) => (
          <Grid key={product.id} item xs={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      {error && <Alert severity="error">{error as React.ReactNode}</Alert>}
    </>
  );
};

export default Home;
