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
  productService.getAllCartRows().then((result) => {
    /*     console.log(result.data) */
    res.status(result.status).json(result.data);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  productService.getCartRowsById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});
