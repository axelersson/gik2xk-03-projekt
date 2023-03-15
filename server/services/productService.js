const db = require ("../models");
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
            tooLong: "^Titeln får inte vara längre än %{count} tecken lång."
    },
    },
    description: {
    },
    price: {
    },
    imageUrl: {
        url: {
            message: "^Felaktig sökväg"
        }
    },
};
const {
    createResponseSuccess,
    createResponseError,
    createResponseMessage
} = require("../helpers/responseHelper");

async function getAll() {
    try {
        const allProducts = await db.product.findAll();
        return createResponseSuccess(allProducts);
    } catch (error){
        return createResponseError(error.status, error.message);
        };
    }
    /*om allt blev bra, returnera allPosts */
    //return {status: 200, data: allProducts


async function create(product) {
    const invalidData = validate(product, constraints);
    if(invalidData) {
        return createResponseError(422, invalidData);
    } else {
        try {
            const newProduct = await db.product.create(product);
            return createResponseSuccess(newProduct);
        }catch (error){
            return createResponseError(error.status, error.message);
        }
    }
}

async function update(product, id) {
    const invalidData = validate(product, constraints);
    if (!id) {
        return createResponseError(422, "Id är obligatorisk");
    }
    if(invalidData) {
        return createResponseError(422, invalidData);
     }
        try {
            await db.product.update(product, {
                where: {id}
            });
            return createResponseMessage(200, "Inlägget uppdaterades");
        }catch (error){
            return createResponseError(error.status, error.message);
        }
        
}


function destroy() {

}

module.exports = { getAll,
    create,
    update,
    destroy
}