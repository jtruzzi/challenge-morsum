import React from "react";
import ProductCard from "@/components/ProductCard";
import { Grid, Typography } from "@mui/material";

const Home = () => {
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
