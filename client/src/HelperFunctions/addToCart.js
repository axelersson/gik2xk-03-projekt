import { create } from "../models/CartModel";

function addToCart(id) {
  create(id).then(() => {});
}

export default addToCart;
