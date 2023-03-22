import { create } from "../models/CartModel"

export default function addToCart(params) {
  const id = params
  console.log(id)
  create(id).then(() => {
    console.log('Produkten är tillagd i varukorgen')
  })
} 
