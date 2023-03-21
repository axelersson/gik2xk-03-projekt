export default function findRating(products, id) {
    console.log(products)
    console.log(id)
    for (let index = 0; index < products.length; index++) {
        console.log('hej')
        if (products[index].id == id){
            console.log(products[index])
            return products[index].ratings
        }
        
    }

}