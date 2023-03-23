import { Rating } from "@mui/material";

function RatingList({ ratings }) {
  if (ratings) {
    ratings.map((rating) => (
      <Rating
        name="customized-10"
        key={`ratingId_${rating.id}`}
        value={rating.rating}
        precision={0.5}
        max={10}
      />
    ));
  }
}

export default RatingList;
