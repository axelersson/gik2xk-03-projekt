import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ProductItemLarge from "../components/ProductItemLarge";
import RatingList from "../components/RatingList";
import addToCart from "../HelperFunctions/addToCart";

function ProductDetail() {
  const params = useParams();

  return (
    <>
      <ProductItemLarge params={params} />
      <ul>
      <RatingList params={params} />
      </ul><Link to={`/products/${params.id}/edit`}>
      <Button variant="outlined">
      Uppdatera produkt
      </Button></Link>
        {console.log(params.id)}
      <Button onClick={addToCart(params.id)} variant="outlined">
        Lägg till i varukorg
      </Button>
    </>
  );
}

export default ProductDetail;
