const router = require("express").Router();
const productService = require("../services/productService");

router.post("/:id", (req, res) => {
    console.log('hej från cartRowsRoute')
    const user = 1;
    const productId = req.params.id;
    const amount = 1;
    productService.addCartRow(productId, user, amount).then((result) => {
      res.status(result.status).json(result.data);
    });
  });

  module.exports = router;