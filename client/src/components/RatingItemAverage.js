import { Rating, Typography } from "@mui/material";



function RatingItemAverage({ products }) {

    let sum = 0;
    let avg = 0;
    for (let index = 0; index < products.ratings.length; index++) {
        sum += products.ratings[index].rating 
    }
    avg = sum / products.ratings.length
  console.log('hej')
  
  return (
      <>
          {<Typography variant="h6" component="h6">Genomsnittligt Betyg:</Typography>}
          <br></br>
          <Rating name="customized-10" value={avg} precision={0.5} max={10} readOnly/>
      </>
  );
}

export default RatingItemAverage;

