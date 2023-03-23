import { Button, Rating } from "@mui/material";
import { useState } from "react";
import { create } from "../models/RatingsModel";

function AddRating({ id }) {
  return (
    <>
      <h3>Betygsätt produkten här: </h3>
      <Rating
        precision={0.5}
        max={10}
        onClick={(e) => {
          console.log(e.target.value, id);
          create(id, e.target.value).then(() => {
            console.log("Lagt till omdöme");
          });
        }}
      />
    </>
  );
}
export default AddRating;

/* function AddRating({ id, onRatingAdded }) {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  const handleRatingSubmit = async () => {
    await create(id, ratingValue);
    onRatingAdded();
  };

  return (
    <>
      <h3>Betygsätt produkten här: </h3>
      <Rating
        precision={0.5}
        max={10}
        value={ratingValue}
        onChange={handleRatingChange}
      />
      <Button onClick={handleRatingSubmit}>Lägg till betyg</Button>
    </>
  );
}
 */
/* async function onRate(e){
     await create(product.id).then(() => console.log('borttaget')); 
    console.log(e)
 */
