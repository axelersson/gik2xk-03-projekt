import { Rating, Typography } from "@mui/material";

function RatingItemSmall({ rating }) {
  console.log('hej')
  
  return (
    rating ?
      <>
        {console.log(rating)}
        <Typography component="legend">{rating.createdAt}Lite extra text</Typography>
        <Rating name="customized-10" value={rating.rating} precision={0.5} max={10} />
        </> : <>Betyg saknas</>
  );
}

export default RatingItemSmall;

/* format(` */
/* import { format } from "date-fns"; */
