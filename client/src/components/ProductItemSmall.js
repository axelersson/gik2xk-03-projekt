/* import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import addToCart from "../HelperFunctions/addToCart";

function ProductItemSmall({ product }) {
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
        <Button
          variant="outlined"
          onClick={() => {
            
          }}
        >
          Lägg till i varukorg
        </Button>
      </div>
    </>
  );
}

export default ProductItemSmall;
 */

import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import addToCart from "../HelperFunctions/addToCart";

function ProductItemSmall({ product }) {
  const handleAddToCart = () => {
    addToCart(product.id);
  };

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
        <Button variant="outlined" onClick={handleAddToCart}>
          Lägg till i varukorg
        </Button>
      </div>
    </>
  );
}

export default ProductItemSmall;
