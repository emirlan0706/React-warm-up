import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UseProduct } from "../contexts/ProductContextProvider";

const EditProductPage = () => {
  const { oneProduct, getOneProduct, editeProduct } = UseProduct();
  const params = useParams();

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setFormValue(oneProduct);
    }
  }, [oneProduct]);

  function handleChange(e) {
    let obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
    console.log(formValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.price.trim() ||
      !formValue.image.trim() ||
      !formValue.category.trim()
    ) {
      alert("full the fileds");
      return;
    }
    editeProduct(formValue, params.id);
    navigate("/");
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add Product</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <TextField
          value={formValue.title}
          onChange={(e) => handleChange(e)}
          name="title"
          label="Title"
          variant="outlined"
        />
        <TextField
          value={formValue.description}
          onChange={(e) => handleChange(e)}
          name="description"
          label="Description"
          variant="outlined"
        />
        <TextField
          value={formValue.price}
          onChange={(e) => handleChange(e)}
          name="prise"
          label="Price"
          variant="outlined"
        />
        <TextField
          value={formValue.image}
          onChange={(e) => handleChange(e)}
          name="image"
          label="Image"
          variant="outlined"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            onChange={(e) => handleChange(e)}
            id="demo-simple-select"
            label="Category"
            name="category"
            value={formValue.category}
          >
            <MenuItem value={"electronics"}>Electronics</MenuItem>
            <MenuItem value={"jewelry"}>jewelry</MenuItem>
            <MenuItem value={"books"}>Books</MenuItem>
          </Select>
        </FormControl>
        <Button type="sumbit">Send Product</Button>
      </form>
    </div>
  );
};

export default EditProductPage;
