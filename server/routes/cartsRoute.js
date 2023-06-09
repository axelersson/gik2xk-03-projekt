const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");
const productService = require("../services/productService");

const constraints = {
  /* email: {
        length: {
        minimum: 2,
        maximum: 100,
        prescence: true,
        tooShort: "^Mailadressen måste vara minst %{count} tecken lång.",
        tooLong: "^Mailadressen  får inte vara längre än %{count} tecken lång."
    }
    }, */
  title: {
    length: {
      minimum: 2,
      maximum: 100,
      prescence: true,
      tooShort: "^Titeln måste vara minst %{count} tecken lång.",
      tooLong: "^Titeln får inte vara längre än %{count} tecken lång.",
    },
  },
  description: {},
  price: {},
  imageUrl: {
    url: {
      message: "^Felaktig sökväg",
    },
  },
};

router.get("/", (req, res) => {
  db.cart.findAll().then((result) => {
    res.send(result);
  });
});

router.post("/:id", (req, res) => {
  const id = req.params;
  /*  const cart = 1;
  const amount = 1; */
  /*   const addToCartObject = {
    cart.cartRow.amount: 1,

  } */
  const invalidData = validate(id, constraints);
  if (invalidData) {
    res.status(400).json(invalidData);
    console.log();
  } else {
    db.cart.create(id).then((result) => {
      res.send(result);
    });
  }
});

router.put("/", (req, res) => {
  const cart = req.body;
  const invalidData = validate(cart, constraints);
  const id = cart.id;
  if (invalidData || !id) {
    res.status(400).json(invalidData || "Id är obligatoriskt.");
  } else {
    db.cart
      .update(cart, {
        where: { id: cart.id },
      })
      .then((result) => {
        res.send(result);
      });
  }
});

router.delete("/", (req, res) => {
  db.cart
    .destroy({
      where: { id: req.body.id },
    })
    .then(() => {
      res.json(`Inlägget raderades`);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  productService.getCartAndProductsById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
