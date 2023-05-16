import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { UseProduct } from "../contexts/ProductContextProvider";
import { LIMIT } from "../helpers/const";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts, pageTotalCount } = UseProduct();
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );
  useEffect(() => {
    if (category === "all") {
      setSearchParams({
        q: search,
        _page: 1,
        _limit: LIMIT,
      });
    } else {
      setSearchParams({
        q: search,
        category: category,
        _page: 1,
        _limit: LIMIT,
      });
    }
  }, [search, category]);

  useEffect(() => {
    if (category === "all") {
      setSearchParams({
        q: search,
        _page: page,
        _limit: LIMIT,
      });
    } else {
      setSearchParams({
        q: search,
        category: category,
        _page: page,
        _limit: LIMIT,
      });
    }
  }, [page]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (pageTotalCount < page) {
      setPage(pageTotalCount);
    }
  }, [pageTotalCount]);

  console.log(products);
  return (
    <div>
      <Box
        sx={{
          maxWidth: "200px",
          margin: "20px auto",
          display: "flex",
          gap: "30px",
        }}
      >
        <TextField
          label="search"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Catigory</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"electronics "}>electronics</MenuItem>
            <MenuItem value={"jewelry"}>Jewelry</MenuItem>
            <MenuItem value={"books"}>Books</MenuItem>
          </Select>
        </FormControl>
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
          variant="outlined"
          color="secondary"
        />
      </Box>
    </div>
  );
};

export default ProductList;
