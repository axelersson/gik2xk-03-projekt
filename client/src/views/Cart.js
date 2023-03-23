/* import { useEffect, useState } from "react"; */
import { Grid, Typography } from "@mui/material";
import { getAllCartRows } from "../models/ProductModel";
import CartList from "../components/CartList";

function Cart() {
  return (
    <Grid container columnSpacing={2} p={2} className="Products">
      <Grid className="Product__grid-item" item cs={12} md={12}>
        <Typography variant="h4" component="h2">
          Produkter i varukorg
        </Typography>
        <CartList></CartList>
      </Grid>
    </Grid>
  );
}

export default Cart;
