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
    /* },
    description: {
    },
    price: {
    */
  },
  imageUrl: {
    url: {
      message: "^Felaktig sökväg",
    },
  },
};
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");

async function getById(id) {
  try {
    const oneProduct = await db.product.findOne({
      where: { id },
      include: [db.rating],
    });
    return createResponseSuccess(oneProduct);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getAll() {
  try {
    const allProducts = await db.product.findAll({ include: [db.rating] });
    return createResponseSuccess(allProducts);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}
/*om allt blev bra, returnera allPosts */
//return {status: 200, data: allProducts

async function create(product) {
  const invalidData = validate(product, constraints);
  if (invalidData) {
    console.log(invalidData)
    return createResponseError(422, invalidData);
    
  } else {
    try {
      const newProduct = await db.product.create(product);

      return createResponseSuccess(newProduct);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }
}

async function addRating(productId, rating) {
  if (!productId) {
    return createResponseError(422, "Id är obligatoriskt");
  } else {
    try {
      let usedRating = rating
      let usedId = productId
      rating = {rating: usedRating, productId: usedId}
      
      
      const newRating = await db.rating.create(rating);
      return createResponseSuccess(newRating);
    } catch (error) {
      console.log(error)
      return createResponseError(error.status, error.message);
    }
  }
}

async function update(product, id) {
  const invalidData = validate(product, constraints);
  if (!id) {
    return createResponseError(422, "Id är obligatorisk");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const existingProduct = await db.product.findOne({ where: { id } });
    if (!existingProduct) {
      return createResponseError(404, "Hittade ingen produkt att uppdatera!");
    }
    await db.product.update(product, {
      where: { id },
    });
    return createResponseMessage(200, "Inlägget uppdaterades");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}
function _formatProduct(product) {
  const cleanProduct = {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    imageUrl: product.imageUrl,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };

  if (product.ratings) {
    cleanPost.ratings = [];

    product.ratings.map((rating) => {
      return (cleanProduct.ratings = [
        {
          rating: product.rating.rating,
          createdAt: product.rating.createdAt,
        },
        ...cleanProduct.ratings,
      ]);
    });
  }
}

async function destroy(id) {
  if (!id) {
    return createResponseError(422, "Id är obligatoriskt");
  }
  try {
    await db.product.destroy({
      where: { id },
    });
    return createResponseMessage(200, "Inlägget raderades");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

module.exports = {
  addRating,
  getById,
  getAll,
  getById,
  create,
  update,
  destroy,
};
