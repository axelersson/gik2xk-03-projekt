import { useEffect, useState } from "react";
import { getAll } from "../models/ProductModel";
import ProductItemSmall from "./ProductItemSmall";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll().then((products) => setProducts(products));
  }, []);
  console.log(products);
  return (
    <ul>
      {products &&
        products.map((product) => {
          return (
            <li key={`productId_${product.id}`}>
              <ProductItemSmall product={product} />
            </li>
          );
        })}
    </ul>
  );
}

export default ProductList;
