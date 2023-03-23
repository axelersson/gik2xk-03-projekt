import { create } from "../models/CartModel";

function addToCart(id) {
  console.log("hej");
  create(id).then(() => {
    console.log("hej");
  });
}

export default addToCart;
