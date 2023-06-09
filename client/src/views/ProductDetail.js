import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import AddRating from "../components/AddRating";
import ProductItemLarge from "../components/ProductItemLarge";
import RatingList from "../components/RatingList";
import addToCart from "../HelperFunctions/addToCart";
import findProduct from "../HelperFunctions/findProduct";
import { getAll, getOne } from "../models/ProductModel";
import { useEffect, useState } from "react";

function ProductDetail() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll().then((products) => setProducts(findProduct(products, params.id)));
  }, [params]);

  /* getOne(productId).then((product) => { */

  /* async function onRate(e){
     await create(product.id).then(() => console.log('borttaget')); 
    console.log(e)
   } */
  if (products) {
    return (
      <>
        <ProductItemLarge products={products} />
        <AddRating id={products.id} />
        <ul>
          <RatingList params={params} />
        </ul>
        <Link to={`/products/${params.id}/edit`}>
          <Button variant="outlined">Uppdatera produkt</Button>
        </Link>
        <Button
          onClick={() => {
            addToCart(params.id);
          }}
          variant="outlined"
        >
          Lägg till i varukorg
        </Button>
      </>
    );
  }
}

export default ProductDetail;
