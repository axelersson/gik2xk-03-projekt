export default function (cartAndProduct) {
  const amount = cartAndProduct.cartRow.amount;
  const price = cartAndProduct.price;
  const sum = amount * price;
  return sum;
}
