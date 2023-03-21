import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

function ProductItemSmall({ product }) {
  console.log(product);
  console.log(product.id);
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <img
          height="150"
          width="150"
          src={product.imageUrl}
          alt="Det saknas en bild på produkten"
        />
      </Link>
      <div>
        <Typography variant="h5" component="h3">
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </Typography>
        <Link to={`/products/${product.id}/edit`}>
          <Button variant="outlined">Ändra produkt</Button>
        </Link>
        <Link to={`/products/${product.id}/addToCart`}>
          <Button variant="outlined">Lägg till i varukorg</Button>
        </Link>
      </div>
    </>
  );
}

export default ProductItemSmall;
