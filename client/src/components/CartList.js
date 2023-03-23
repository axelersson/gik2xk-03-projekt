import { useEffect, useState } from "react";
import { getOne } from "../models/CartModel";
import CartItemSmall from "./CartItemSmall";
import calculatePrice from "../HelperFunctions/calculatePrice";

function CartList() {
  const id = 1;
  const [cart, setProducts] = useState([]);
  useEffect(() => {
    getOne(id).then((cart) => setProducts(cart));
  }, []);
  let summa;
  return (
    <ul>
      {/* {console.log(cart.products)} */}
      {cart.products &&
        cart.products.map((cartAndProduct) => {
          return (
            <li key={`cartId_${cartAndProduct.cartRow.id}`}>
              <CartItemSmall cartAndProduct={cartAndProduct} />
            </li>
          );
        })}
      <h1>Summan är {summa}</h1>
      {cart.products &&
        cart.products.map((cartAndProduct) => {
          const currentsum =
            cartAndProduct.cartRow.amount * cartAndProduct.price;
          console.log(
            cartAndProduct.cartRow.amount * cartAndProduct.price,
            "amount"
          );
          return (summa += currentsum);
        })}
      {<h3>Totalkostnad: {summa}</h3>}
    </ul>
  );
}
/* const amount = cartAndProduct.cartRow.amount;
  const price = cartAndProduct.price; */

export default CartList;
