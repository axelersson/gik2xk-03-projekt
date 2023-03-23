const router = require("express").Router();
const productService = require("../services/productService");

router.post("/:id", (req, res) => {
  console.log("hej från cartRowsRoute");
  const cartId = 1;
  const productId = req.params.id;
  const amount = 1;
  productService.addProduct(productId, cartId, amount).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;

router.get("/", (req, res) => {
  cartRowsAndProducts = {};
  productService.getAllCartRows().then((result) => {
    cartRowsAndProducts += result.data;
    console.log(cartRowsAndProducts);
  });
  console.log(cartRowsAndProducts);
  productService.getAll().then((result) => {
    cartRowsAndProducts += [result.data];
    /* res.status(result.status).json(result.data); */
  });
  console.log(cartRowsAndProducts);
  res.status(200).json(cartRowsAndProducts);
  /* res.send().json(cartRowsAndProducts); */
  /* console.log(cartRowsAndProducts.data); */
});
