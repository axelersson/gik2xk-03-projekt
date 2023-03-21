const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");

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

router.get("/:id/ratings", (req, res) => {
  id = req.params.id;
  db.rating
    .findAll(ratings, {
      where: { id: rating.id },
    })
    .then((result) => {
      res.send(result);
    });
});

/* db.rating
      .update(rating, {
        where: { id: rating.id },
      })
      .then((result) => {
        res.send(result);
      });
  } */

router.get("/", (req, res) => {
  db.rating.findAll().then((result) => {
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const rating = req.body;
  const invalidData = validate(rating, constraints);
  if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.rating.create(rating).then((result) => {
      res.send(result);
    });
  }
});

router.put("/", (req, res) => {
  const rating = req.body;
  const invalidData = validate(rating, constraints);
  const id = rating.id;
  if (invalidData || !id) {
    res.status(400).json(invalidData || "Id är obligatoriskt.");
  } else {
    db.rating
      .update(rating, {
        where: { id: rating.id },
      })
      .then((result) => {
        res.send(result);
      });
  }
});

router.delete("/", (req, res) => {
  db.rating
    .destroy({
      where: { id: req.body.id },
    })
    .then(() => {
      res.json(`Inlägget raderades`);
    });
});

module.exports = router;
