const router = require("express").Router();
const productService = require("../services/productService");

router.get("/:id", (req, res) => {
  const id = req.params.id;

  productService.getById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/:id/ratings", (req, res) => {
  id = req.params.id;
  /* db.rating
    .findAll(rating, {
      where: { id: rating.id },
    })
    .then((result) => {
      res.send(result);
    }); */

  productService.getById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post("/:id/addRating", (req, res) => {
  /* const betyg = req.body.rating
  console.log(betyg, 'detta är från routern') */
  const rating = req.body.rating;
  const productId = req.params.id;
  productService.addRating(productId, rating).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get("/", (req, res) => {
  productService.getAll().then((result) => {
    /*     console.log(result.data) */
    res.status(result.status).json(result.data);
  });
});

router.post("/", (req, res) => {
  const product = req.body;
  productService.create(product).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put("/", (req, res) => {
  const product = req.body;
  //const invalidData = validate(product, constraints);
  const id = product.id;

  productService.update(product, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  productService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
