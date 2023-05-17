import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContextProvider";

const CartPage = () => {
  const { cart, getCart, changeProductCount } = useCart();

  useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>image</TableCell>
            <TableCell>title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="center">Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <img src={row.image} width={30} />
              </TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell align="center">
                <input
                  type="number"
                  value={row.count}
                  onChange={(e) => changeProductCount(e.target.value, row.id)}
                  min={1}
                  max={1000}
                />
              </TableCell>
              <TableCell>{row.sumPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Typography variant="h5">TotalPrise: ${cart.totalPrice}</Typography>
        <button variant="outlined" component={Link} to="/">
          Buy in sale
        </button>
      </Box>
    </div>
  );
};

export default CartPage;
