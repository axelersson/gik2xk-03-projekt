import { Typography } from "@mui/material";
import { Rating } from "@mui/material";
/* import calculateAverage from "../HelperFunctions/calculateAverage"; */
import RatingItemAverage from "./RatingItemAverage";
import "./ProductItemLarge.css";

function ProductItemLarge({ products }) {
  if (products && products.ratings) {
    return products.ratings.length == 1 ? (
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
        <RatingItemAverage
          key={`ratingItem_id${products.ratings.length}`}
          products={products}
        />
        <li className="listan">
          <ul className="lista">
            <p>{products.ratings.createdAt}</p>
            <Rating
              name="customized-10"
              value={products.ratings.rating}
              key={`ratingId_${products.ratings.id}`}
              precision={0.5}
              max={10}
              readOnly
            />
          </ul>
        </li>
      </>
    ) : (
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
        <RatingItemAverage
          key={`ratingItem_id${products.ratings.length}`}
          products={products}
        />
        <p>Användares betyg:</p>
        <li className="listan">
          {products.ratings.map((rating) => (
            <ul className="lista">
              <p>{rating.createdAt}</p>
              <Rating
                name="customized-10"
                key={`ratingId_${rating.id}`}
                value={rating.rating}
                precision={0.5}
                max={10}
                readOnly
              />
            </ul>
          ))}
        </li>
      </>
    );
    //Skapa "switch" för när inga omdömen finns
  }
}

export default ProductItemLarge;
