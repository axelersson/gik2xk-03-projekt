/* import calculatePrice from "../HelperFunctions/calculatePrice"; */

function CartItemSmall({ cartAndProduct }) {
  return (
    <>
      <img
        height="75"
        width="75"
        src={cartAndProduct.imageUrl}
        alt="Det saknas en bild på produkten"
        border="1 px solid black"
      />

      {/* {console.log(cartAndProduct)} */}
      {<h3>{cartAndProduct.title}</h3>}
      {<h3>{cartAndProduct.price}</h3>}
      {<h3>{cartAndProduct.cartRow.amount} ST</h3>}
      {/* {<h3>Belopp {calculatePrice(cartAndProduct)}</h3>} */}
      {/* {console.log(cartAndProduct.cartRow.amount)} */}
      {/* 
      <Link to={`/products/${product.id}`}>
        <img
          height="150"
          width="150"
          src={product.imageUrl}
          alt="Det saknas en bild på produkten"
        />
      </Link>
      <div>
        <Typography variant="h5" component="h3">
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </Typography>
        <Link to={`/products/${product.id}/edit`}>
          <Button variant="outlined">Ändra produkt</Button>
        </Link>
        <Button onClick={addToCart(product.id)} variant="outlined">
          Lägg till i varukorg
        </Button>
      </div> */}
    </>
  );
}
export default CartItemSmall;
