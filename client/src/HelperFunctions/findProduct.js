export default function findProduct(products, id) {
    for (let index = 0; index < products.length; index++) {
        if (products[index].id == id){
            return products[index]
        }
        
    }

}