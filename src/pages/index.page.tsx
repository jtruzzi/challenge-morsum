import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/redux/productsSlice";

const Home = () => {
  const products = useSelector(getProducts);

  return (
    <>
      <Typography variant="h5" component="h1" sx={{ pb: 3 }}>
        Product Index
      </Typography>
      <Grid rowSpacing={3} columnSpacing={3} container>
        {products.map((product) => (
          <Grid key={product.id} item xs={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
