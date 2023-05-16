import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseProduct } from "../contexts/ProductContextProvider";

const ProductDetailsPage = () => {
  const { oneProduct, getOneProduct } = UseProduct();
  const params = useParams();
  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  return (
    <div>
      {oneProduct ? (
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 300 }}
            image={oneProduct.image}
            title="green iguana"
          />
          <Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {oneProduct.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {oneProduct.description}
              </Typography>
              <Typography variant="h6">{oneProduct.price}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Box>
        </Card>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default ProductDetailsPage;
