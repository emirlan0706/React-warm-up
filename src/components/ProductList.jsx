import React, { useEffect } from "react";
import { useProduct } from "../contexts/ProductContextProvider";

const ProductList = () => {
  const { products, getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <div>
      <p>ProductList</p>
    </div>
  );
};

export default ProductList;
