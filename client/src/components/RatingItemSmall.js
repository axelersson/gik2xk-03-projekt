import { Rating, Typography } from "@mui/material";



function RatingItemSmall({ products }) {

    let sum = 0;
    let avg = 0;
    for (let index = 0; index < products.ratings.length; index++) {
        sum += products.ratings[index].rating 
    }
    avg = sum / products.ratings.length
  console.log('hej')
  
  return (
      <>
          {<Typography variant="h5" component="h3">Genomsnittligt Betyg:</Typography>}
          <Rating name="customized-10" value={avg} precision={0.5} max={10} readOnly/>
      </>
  );
}

export default RatingItemSmall;

