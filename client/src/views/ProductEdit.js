import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { create, getOne, remove, update } from "../models/ProductModel";

function ProductEdit() {
  const params = useParams();
  const productId = params.id;
  const emptyProduct = {
    id: 0,
    title: "",
    description: "",
    imageUrl: "",
    ratings: [],
  };
  console.log(params);

  const [product, setProduct] = useState(emptyProduct);

  useEffect(() => {
    if (!isNaN(productId)) {
      getOne(productId).then((product) =>
        setProduct({ ...product, imageUrl: product.imageUrl || "" })
      );
    } else {
      setProduct(emptyProduct);
    }
    // eslint-disable-next-line
  }, [productId]);
  console.log(product);

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newProduct = { ...product, [name]: value };
    setProduct(newProduct);
  }
  function onSave() {
    //skicka save ller npgot
    if (product.id === 0) {
      create(product).then(() => {
        console.log("Sparat ny produkt");
      });
    } else {
      update(product).then(() => {
        console.log("Uppdaterat produkt");
      });
    }
  }
  async function onDelete() {
    await remove(product.id).then(() => console.log("borttaget"));
  }
  return (
    <form>
      <TextField
        value={product.title}
        onChange={onChange}
        name="title"
        label="Produktnamn"
        fullWidth
      />
      <TextField
        value={product.description}
        onChange={onChange}
        name="description"
        label="description"
        fullWidth
        multiline
        minRows={7}
      />

      <TextField
        value={product.price}
        onChange={onChange}
        name="price"
        label="Pris"
        fullWidth
      />
      <TextField
        value={product.imageUrl}
        onChange={onChange}
        name="imageUrl"
        label="imageUrl"
        fullWidth
      />

      {product.id !== 0 && (
        <Button variant="outlined" onClick={onSave}>
          Uppdatera produkt
        </Button>
      )}
      {product.id === 0 && (
        <Link to={`/products`}>
          <Button variant="outlined" onClick={onSave}>
            Lägg till produkt
          </Button>
        </Link>
      )}
      {product.id !== 0 && (
        <Link to={`/products`}>
          <Button
            variant="outlined"
            onClick={() => {
              console.log(product.id);
              onDelete(product.id);
            }}
          >
            Ta bort produkt
          </Button>
        </Link>
      )}
    </form>
  );
}

export default ProductEdit;
