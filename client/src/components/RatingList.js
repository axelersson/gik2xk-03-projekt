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

    /* return (  
    <li key={`ratingId_${rating.id}`}>
      <RatingItemSmall rating={rating} />
      </li>
   ) */
  }
}

export default RatingList;

/* console.log(params.id);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll().then((products) => setProducts(FindProduct(products, params.id)));
  }, [params]);
  console.log(products)
  if (products) {
  return (
    <>
      <img
        height="50"
        width="50"
        src={products.imageUrl}
        alt="Det saknas en bild på produkten"
      />
      <Typography variant="h5" component="h3">
        <div>{products.title}</div>
      </Typography>
      <p>{products.description}</p>
    </>
  );
  } */
