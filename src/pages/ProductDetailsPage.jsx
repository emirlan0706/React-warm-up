import React from "react";
import { useProduct } from "../contexts/ProductContextProvider";

const ProductDetailsPage = () => {
  const {oneProduct, getOneProduct} = useProduct()

  return (
    <div>
      {oneProduct ? (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={oneProduct.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {oneProduct.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {oneProduct.description}
          </Typography>
          <Typography variant="h6">
            ${oneProduct.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      )}
    </div>
  );
};

export default ProductDetailsPage;
