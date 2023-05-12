import React, { useEffect, useState } from "react";
import { useProduct } from "../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import { Box, Grid, Pagination, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { products, getProducts, pageTotalCount } = useProduct();
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Box
        sx={{
          maxWidth: 300,
          margin: "20px  auto",
          display: "flex",
          gap: "30px",
        }}
      >
        <TextField
          label="Search..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Grid container spacing={2}>
        {products.map((item) => (
          <Grid key={item.id} item md={4} sm={6} sx={12}>
            <ProductCard item={item} key={item.id} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Pagination
          count={pageTotalCount}
          page={page}
          onChange={(e, p) => setPage(p)}
        />
      </Box>
    </div>
  );
};

export default ProductList;
