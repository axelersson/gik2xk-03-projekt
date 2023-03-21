const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");

const constraints = {
  email: {
    length: {
      minimum: 2,
      maximum: 100,
      prescence: true,
      tooShort: "^Mailadressen måste vara minst %{count} tecken lång.",
      tooLong: "^Mailadressen får inte vara längre än %{count} tecken lång.",
    },
    email: {
      message: "^E-postadressen är i ett felaktigt format",
    },
  },
  /*
    firstName: {

    },
    lastName: {
        
    },
    password: {
        
    } */
};
router.get("/", (req, res) => {
  db.user.findAll().then((result) => {
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const user = req.body;
  const invalidData = validate(user, constraints);
  if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.user.create(user).then((result) => {
      res.send(result);
    });
  }
});

router.put("/", (req, res) => {
  const user = req.body;
  const invalidData = validate(user, constraints);
  const id = user.id;
  if (invalidData || !id) {
    res.status(400).json(invalidData || "Id är obligatoriskt.");
  } else {
    db.user
      .update(user, {
        where: { id: user.id },
      })
      .then((result) => {
        res.send(result);
      });
  }
});

router.delete("/", (req, res) => {
  db.user
    .destroy({
      where: { id: req.body.id },
    })
    .then(() => {
      res.json(`Användaren raderades`);
    });
});

module.exports = router;
