import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getAll } from "../models/ProductModel";
import findProduct from "../HelperFunctions/findProduct";
import { Rating } from "@mui/material";
/* import calculateAverage from "../HelperFunctions/calculateAverage"; */
import RatingItemAverage from "./RatingItemAverage";
import AddRating from "./AddRating";

function ProductItemLarge({ params }) {
  console.log(params.id);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll().then((products) => setProducts(findProduct(products, params.id)));
  }, [params]);
  console.log(products)
  if (products && products.ratings) {
    console.log(products.ratings.length)
  return (
    
    products.ratings.length == 1 ?
    <>
      <img
        height="250"
        width="250"
        src={products.imageUrl}
        alt="Det saknas en bild på produkten"
      />
      <Typography variant="h5" component="h3">
        <div>{products.title}</div>
      </Typography>
      <p>{products.description}</p>
      <p>{products.price} SEK</p>
      <AddRating id={products.id}/>
      <RatingItemAverage key={`ratingItem_id${products.ratings.length}`} products={products} />
      <li><ul><p>{products.ratings.createdAt}</p><Rating name="customized-10" value={products.ratings.rating} key={`ratingId_${products.ratings.id}`} precision={0.5} max={10} readOnly /></ul></li>
    </>
    : 
    <>
      <img
        height="250"
        width="250"
        src={products.imageUrl}
        alt="Det saknas en bild på produkten"
      />
      <Typography variant="h5" component="h3" >
        <div>{products.title}</div>
      </Typography>
      <p>{products.description}</p>
      <p>{products.price} SEK</p>
      <AddRating id={products.id}/>
      <RatingItemAverage key={`ratingItem_id${products.ratings.length}`} products={products} />
      <p>Användares betyg:</p>
      <li>
      {products.ratings.map((rating) => <ul><p>{rating.createdAt}</p><Rating name="customized-10" key={`ratingId_${rating.id}`} value={rating.rating} precision={0.5} max={10} readOnly /></ul>)} 
      </li>
    </> 
  ); 
  }

}

export default ProductItemLarge;
