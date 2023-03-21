import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ProductItemLarge from "../components/ProductItemLarge";
import RatingList from "../components/RatingList";

function ProductDetail() {
  const params = useParams();
  /* console.log({ params }); */
  return (
    <>
      <ProductItemLarge params={params} />
      <ul>
      <RatingList params={params} />
      </ul><Link to={`/products/${params.id}/edit`}>
      <Button variant="outlined">
      Uppdatera produkt
      </Button></Link>
        
      <Button variant="outlined">
        {/* <Link to={`/products/${product.id}/addToCart`}>
            <AddToCart productId={product.id} />
          </Link> */}
        Ta bort produkt
      </Button>
    </>
  );
}

export default ProductDetail;
