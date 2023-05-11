import React, { useEffect } from "react";
import { useProduct } from "../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";

const ProductList = () => {
  const { products, getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <div>
      <Grid container spacing={2}>
        {products.map((item) => (
          <Grid item md={4} sm={6} sx={12}>
            <ProductCard item={item} key={item.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
