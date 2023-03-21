import { Grid, Typography } from "@mui/material";
import ProductList from "../components/ProductList";
import "./Products.css";

function Products() {
  return (
    <Grid container columnSpacing={2} p={2} className="Products">
      <Grid className="Product__grid-item" item cs={12} md={12}>
        <Typography variant="h4" component="h2">
          Lista över produkter
        </Typography>
        <ProductList></ProductList>
      </Grid>
    </Grid>
  );
}

export default Products;

//<h2>helt vanligt jävla knark</h2>;
//
//
